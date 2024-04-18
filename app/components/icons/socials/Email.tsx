type Props = {
  className?: string;
};

export default function Email(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-12 -12 48 48"
      width="1em"
      height="1em"
      className={`${props.className} rounded-full`}
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        d="M12 12.713l-11.985-9.713h23.971l-11.986 9.713zm-5.425-1.822l-6.575-5.329v12.501l6.575-7.172zm10.85 0l6.575 7.172v-12.501l-6.575 5.329zm-1.557 1.261l-3.868 3.135-3.868-3.135-8.11 8.848h23.956l-8.11-8.848z"
        fill="currentColor"
      />
    </svg>
  );
}
