export const BREAKPOINTS = {
  DESKTOP: 1024,
  MOBILE: 768
};

export const MQ_DESKTOP = ` screen and (min-width: ${BREAKPOINTS.DESKTOP +
  1}px) `;
export const MQ_NOT_DESKTOP = ` screen and (max-width: ${BREAKPOINTS.DESKTOP}px) `;
export const MQ_MOBILE = ` screen and (max-width: ${BREAKPOINTS.MOBILE}px) `;
export const MQ_NOT_MOBILE = ` screen and (min-width: ${BREAKPOINTS.MOBILE +
  1}px) `;

export const HEADER_HEIGHT = 72;
export const HEADER_HEIGHT_MOBILE = 48;

export const FOOTER_HEIGHT = 186;
export const FOOTER_HEIGHT_MOBILE = 186;
