import React from 'react';
import Head from '@docusaurus/Head';
import MDXCode from '@docusaurus/theme-classic/lib/theme/MDXComponents/Code';
import MDXA from '@docusaurus/theme-classic/lib/theme/MDXComponents/A';
import MDXPre from '@docusaurus/theme-classic/lib/theme/MDXComponents/Pre';
import MDXDetails from '@docusaurus/theme-classic/lib/theme/MDXComponents/Details';
import MDXHeading from '@docusaurus/theme-classic/lib/theme/MDXComponents/Heading';
import MDXUl from '@docusaurus/theme-classic/lib/theme/MDXComponents/Ul';
import MDXLi from '@docusaurus/theme-classic/lib/theme/MDXComponents/Li';
import MDXImg from '@docusaurus/theme-classic/lib/theme/MDXComponents/Img';
import Admonition from '@docusaurus/theme-classic/lib/theme/Admonition';
import Mermaid from '@docusaurus/theme-classic/lib/theme/Mermaid';

// Avoids having to add a table container div to all markdown tables
function CustomTable(props) {
  return (
    <div className="table-container">
      <table {...props}>
        {props.children}
      </table>
    </div>
  );
}

const MDXComponents = {
  Head,
  details: MDXDetails, // For MD mode support, see https://github.com/facebook/docusaurus/issues/9092#issuecomment-1602902274
  Details: MDXDetails,
  code: MDXCode,
  a: MDXA,
  pre: MDXPre,
  ul: MDXUl,
  li: MDXLi,
  img: MDXImg,
  h1: (props) => <MDXHeading as="h1" {...props} />,
  h2: (props) => <MDXHeading as="h2" {...props} />,
  h3: (props) => <MDXHeading as="h3" {...props} />,
  h4: (props) => <MDXHeading as="h4" {...props} />,
  h5: (props) => <MDXHeading as="h5" {...props} />,
  h6: (props) => <MDXHeading as="h6" {...props} />,
  admonition: Admonition,
  mermaid: Mermaid,
  table: CustomTable
};
export default MDXComponents;
