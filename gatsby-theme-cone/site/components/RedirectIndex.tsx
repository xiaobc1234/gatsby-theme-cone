import React from 'react';
import { navigate, graphql, StaticQuery } from 'gatsby';
import { getUserLangKey } from 'ptz-i18n';
import { withTranslation, WithTranslation } from 'react-i18next';
import Seo from './Seo';
import PageLoading from './PageLoading';

class RedirectIndex extends React.PureComponent<WithTranslation> {
  langKey = '';

  constructor(args: any) {
    super(args);

    // Skip build, Browsers only
    if (typeof window !== 'undefined') {
      const langKey = getUserLangKey(['zh', 'en'], 'zh');
      this.langKey = langKey;
      // https://github.com/angeloocana/gatsby-plugin-i18n/issues/52#issuecomment-451590961
      navigate(langKey);
    }
  }

  renderIndex = (data: {
    site: {
      siteMetadata: {
        title?: string;
      };
    };
  }) => {
    const { t } = this.props;
    const {
      site: {
        siteMetadata: { title = '' },
      },
    } = data;
    return (
      <>
        <Seo
          title={title || 'Cone'}
          titleSuffix={t('菜鸟数据可视化')}
          description={t(
            'Cone是菜鸟场景解决方案，抽象并沉淀的丰富场景开箱即用，结合完善的线上研发链路，轻松完成业务设计和UI开发',
          )}
          lang={this.langKey}
        />
        <PageLoading />
      </>
    );
  };

  render() {
    return (
      <StaticQuery
        query={graphql`
          query HeadingQuery {
            site {
              siteMetadata {
                title
              }
            }
          }
        `}
        render={this.renderIndex}
      />
    );
  }
}

export default withTranslation()(RedirectIndex);
