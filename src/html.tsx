import React from 'react';
import PropTypes from 'prop-types';
import { includeOverlay } from '@porsche-design-system/browser-notification';
import {
  getFontFaceStylesheet,
  getInitialStyles,
  getFontLinks,
} from '@porsche-design-system/components-react/partials';
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <style dangerouslySetInnerHTML={{ __html: getInitialStyles({ withoutTags: true }) }} />
        <link rel="stylesheet" href={getFontFaceStylesheet({ withoutTags: true })} />
        <link rel="preload" href={getFontLinks({ weights: ['regular', 'semi-bold'] })} />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        <PorscheDesignSystemProvider>
          {props.preBodyComponents}
          <div key={`body`} id="___gatsby" dangerouslySetInnerHTML={{ __html: props.body }} />
          {props.postBodyComponents}
          <div dangerouslySetInnerHTML={{ __html: includeOverlay() }} />
        </PorscheDesignSystemProvider>
      </body>
    </html>
  );
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
};
