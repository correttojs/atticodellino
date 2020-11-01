export const BREAKPOINTS = {
  DESKTOP: 1024,
  MOBILE: 768,
};

export const MQ_DESKTOP = ` screen and (min-width: ${
  BREAKPOINTS.DESKTOP + 1
}px) `;
export const MQ_NOT_DESKTOP = ` screen and (max-width: ${BREAKPOINTS.DESKTOP}px) `;
export const MQ_MOBILE = ` screen and (max-width: ${BREAKPOINTS.MOBILE}px) `;
