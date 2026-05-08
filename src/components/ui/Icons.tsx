import type { HTMLAttributes } from 'react';
import { clsx } from 'clsx';

type IconProps = HTMLAttributes<HTMLSpanElement> & {
  size?: number;
  fill?: boolean;
  weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;
  grade?: -25 | 0 | 200;
  opticalSize?: 20 | 24 | 40 | 48;
};

const IconBase = ({ 
  size = 24, 
  fill = false, 
  weight = 400, 
  grade = 0, 
  opticalSize,
  className,
  children,
  style,
  ...props 
}: IconProps) => (
  <span
    className={clsx('material-symbols-outlined', className)}
    style={{
      fontSize: size,
      fontVariationSettings: `'FILL' ${fill ? 1 : 0}, 'wght' ${weight}, 'GRAD' ${grade}, 'opsz' ${opticalSize || size}`,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      userSelect: 'none',
      width: size,
      height: size,
      ...style,
    }}
    aria-hidden="true"
    {...props}
  >
    {children}
  </span>
);

export const CheckIcon = (props: IconProps) => <IconBase {...props}>check</IconBase>;
export const CopyIcon = (props: IconProps) => <IconBase {...props}>content_copy</IconBase>;
export const DownloadIcon = (props: IconProps) => <IconBase {...props}>download</IconBase>;
export const WrenchIcon = (props: IconProps) => <IconBase {...props}>build</IconBase>;
export const ExternalLinkIcon = (props: IconProps) => <IconBase {...props}>open_in_new</IconBase>;
export const ChevronRightIcon = (props: IconProps) => <IconBase {...props}>chevron_right</IconBase>;
export const ChevronLeftIcon = (props: IconProps) => <IconBase {...props}>chevron_left</IconBase>;
export const MessageCircleIcon = (props: IconProps) => <IconBase {...props}>chat_bubble</IconBase>;
export const BugIcon = (props: IconProps) => <IconBase {...props}>bug_report</IconBase>;
export const TerminalIcon = (props: IconProps) => <IconBase {...props}>terminal</IconBase>;
export const ShieldCheckIcon = (props: IconProps) => <IconBase {...props}>verified_user</IconBase>;
export const AlertTriangleIcon = (props: IconProps) => <IconBase {...props}>warning</IconBase>;
export const InfoIcon = (props: IconProps) => <IconBase {...props}>info</IconBase>;
export const MenuIcon = (props: IconProps) => <IconBase {...props}>menu</IconBase>;
export const XIcon = (props: IconProps) => <IconBase {...props}>close</IconBase>;
export const CalendarDaysIcon = (props: IconProps) => <IconBase {...props}>calendar_today</IconBase>;
export const HeartIcon = (props: IconProps) => <IconBase fill {...props}>favorite</IconBase>;
