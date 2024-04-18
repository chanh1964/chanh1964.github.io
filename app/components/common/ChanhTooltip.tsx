import { Tooltip } from 'antd';
import { ReactNode } from 'react';

type Props = {
  title: string | ReactNode;
  bgColor?: string;
  textColor?: string;
  children?: ReactNode;
};

export default function ChanhTooltip(props: Props) {
  return (
    <Tooltip
      title={props.title}
      color={props.bgColor ?? '#fefeff'}
      overlayInnerStyle={{
        color: props.textColor ?? '#343131',
        fontFamily: 'var(--font-sans)',
        fontSize: '1rem',
        fontWeight: 'normal',
      }}
    >
      {props.children}
    </Tooltip>
  );
}
