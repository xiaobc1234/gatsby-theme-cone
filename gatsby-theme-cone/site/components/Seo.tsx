/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from 'react';
import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: any[];
  title?: string;
  titleSuffix?: string;
}

const SEO: React.FC<SEOProps> = ({
  description,
  lang = '',
  meta = [],
  title,
  titleSuffix,
}) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${titleSuffix || site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        }
      ].concat(meta)}
    >
      <link rel="icon" type="image/png" href="//img.alicdn.com/tfs/TB10uQ9KrvpK1RjSZFqXXcXUVXa-32-34.png" />
    </Helmet>
  );
};

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
};

export default SEO;
