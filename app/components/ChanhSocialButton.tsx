import { Button, Tooltip } from 'antd';
import { ReactNode } from 'react';

type Props = {
  tooltipText: string | ReactNode;
  tooltipTextColor?: string;
  tooltipBgColor?: string;
  icon: ReactNode;
  href?: string;
  buttonClass?: string;
  onClick?: () => void;
};

export default function ChanhSocialButton(props: Props) {
  return (
    <Tooltip
      className="social-icon--wrapper"
      title={props.tooltipText}
      color={props.tooltipBgColor ?? '#fefeff'}
      overlayInnerStyle={{
        color: props.tooltipTextColor ?? '#343131',
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        fontWeight: 'normal',
        width: 'max-content',
      }}
    >
      <Button
        type="link"
        href={props.href}
        target="_blank"
        className={`!p-0 ${props.buttonClass}`}
        onClick={props.onClick}
      >
        {props.icon}
      </Button>
    </Tooltip>
  );
}
