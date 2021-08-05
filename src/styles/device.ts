/** @format */

export type Device =
  | 'mobileS'
  | 'mobileM'
  | 'mobileL'
  | 'tabS'
  | 'tabM'
  | 'tabL'
  | 'laptopS'
  | 'laptopM'
  | 'laptopL'
  | 'desktopS'
  | 'desktopM'
  | 'desktopL';

export const BREAKS: Record<Device, number> = {
  mobileS: 319,
  mobileM: 460,
  mobileL: 600,
  tabS: 720,
  tabM: 800,
  tabL: 900,
  laptopS: 1080,
  laptopM: 1280,
  laptopL: 1440,
  desktopS: 1500,
  desktopM: 1660,
  desktopL: 1920,
};

type DEVICEVALUE = number | string | number[] | boolean;

export interface ValuesForDevices {
  mobileS?: DEVICEVALUE;
  mobileM?: DEVICEVALUE;
  mobileL?: DEVICEVALUE;
  tabS?: DEVICEVALUE;
  tabM?: DEVICEVALUE;
  tabL?: DEVICEVALUE;
  laptopS?: DEVICEVALUE;
  laptopM?: DEVICEVALUE;
  laptopL?: DEVICEVALUE;
  desktopS?: DEVICEVALUE;
  desktopM?: DEVICEVALUE;
  desktopL?: DEVICEVALUE;
}

const getMaxVal = (vals: any, device: Device) => {
  if (vals[device]) return vals[device];
  const devicePosition = Object.keys(BREAKS).indexOf(device);
  let returnValue = 0;
  let gotValue = false;

  Object.keys(BREAKS)
    .slice(devicePosition, Object.keys(BREAKS).length)
    .forEach((b) => {
      if (gotValue) return;
      if (vals[b] !== null && vals[b] !== undefined) {
        returnValue = vals[b];
        gotValue = true;
      }
    });

  if (gotValue) return returnValue;

  Object.keys(BREAKS)
    .slice(0, devicePosition)
    .reverse()
    .forEach((b) => {
      if (vals[b]) return vals[b];
    });

  return returnValue;
};

export const getCurr = (): Device => {
  const width: number = window.innerWidth;
  let curr: Device | null = null;

  for (const device in BREAKS) {
    if (
      width <= BREAKS[device as Device] &&
      (curr ? width > BREAKS[curr] : true)
    ) {
      curr = device as Device;
    }
  }

  return curr || 'desktopL';
};

export const getVal = (devicevalues: ValuesForDevices) => {
  return getMaxVal(devicevalues, getCurr());
};

export const LAYOUT = BREAKS.tabS;

export default BREAKS;
