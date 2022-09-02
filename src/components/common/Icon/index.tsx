import React, { CSSProperties } from 'react';

/* eslint-disable max-len */
interface Svg {
  children: React.ReactNode;
  className?: string;
  viewBox?: string;
  style?: CSSProperties;
}

export const Svg = ({ children, className, viewBox, ...props }: Svg): JSX.Element => (
  <svg
    stroke="currentColor"
    fill="currentColor"
    strokeWidth="0"
    height="1em"
    width="1em"
    viewBox={viewBox}
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    {children}
  </svg>
);

Svg.defaultProps = {
  className: '',
  viewBox: '0 0 16 16',
  style: {},
};

export const First = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M12.1934 11.5266C12.2552 11.465 12.3042 11.3917 12.3377 11.3111C12.3711 11.2304 12.3883 11.144 12.3883 11.0566C12.3883 10.9693 12.3711 10.8829 12.3377 10.8022C12.3042 10.7216 12.2552 10.6483 12.1934 10.5866L9.61336 7.99997L12.2 5.41331C12.2617 5.35158 12.3107 5.27831 12.3441 5.19767C12.3775 5.11703 12.3947 5.03059 12.3947 4.94331C12.3947 4.85602 12.3775 4.76959 12.3441 4.68894C12.3107 4.6083 12.2617 4.53503 12.2 4.47331C12.1383 4.41158 12.065 4.36262 11.9844 4.32922C11.9037 4.29582 11.8173 4.27863 11.73 4.27863C11.6427 4.27863 11.5563 4.29582 11.4757 4.32922C11.395 4.36262 11.3217 4.41158 11.26 4.47331L8.20003 7.53331C8.13823 7.59498 8.08919 7.66824 8.05574 7.74889C8.02229 7.82954 8.00507 7.91599 8.00507 8.00331C8.00507 8.09062 8.02229 8.17707 8.05574 8.25772C8.08919 8.33837 8.13823 8.41163 8.20003 8.47331L11.26 11.5333C11.5134 11.7866 11.9334 11.7866 12.1934 11.5266Z"
      fill="currentColor"
    />
    <path
      d="M7.79999 11.5266C7.86179 11.465 7.91082 11.3917 7.94428 11.3111C7.97773 11.2304 7.99495 11.144 7.99495 11.0566C7.99495 10.9693 7.97773 10.8829 7.94428 10.8022C7.91082 10.7216 7.86179 10.6483 7.79999 10.5866L5.21999 7.99997L7.80666 5.41331C7.93131 5.28865 8.00134 5.11959 8.00134 4.94331C8.00134 4.76702 7.93131 4.59796 7.80666 4.47331C7.682 4.34865 7.51294 4.27863 7.33666 4.27863C7.16037 4.27863 6.99131 4.34865 6.86666 4.47331L3.80666 7.53331C3.74485 7.59498 3.69582 7.66824 3.66237 7.74889C3.62891 7.82954 3.61169 7.91599 3.61169 8.00331C3.61169 8.09062 3.62891 8.17707 3.66237 8.25772C3.69582 8.33837 3.74485 8.41163 3.80666 8.47331L6.86666 11.5333C7.11999 11.7866 7.53999 11.7866 7.79999 11.5266V11.5266Z"
      fill="currentColor"
    />
  </Svg>
);

export const Last = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M3.8 4.47332C3.7382 4.535 3.68917 4.60826 3.65572 4.6889C3.62226 4.76955 3.60504 4.85601 3.60504 4.94332C3.60504 5.03063 3.62226 5.11709 3.65572 5.19774C3.68917 5.27839 3.7382 5.35164 3.8 5.41332L6.38667 7.99999L3.8 10.5867C3.73828 10.6484 3.68932 10.7216 3.65592 10.8023C3.62252 10.8829 3.60532 10.9694 3.60532 11.0567C3.60532 11.1439 3.62252 11.2304 3.65592 11.311C3.68932 11.3917 3.73828 11.4649 3.8 11.5267C3.86173 11.5884 3.935 11.6373 4.01564 11.6707C4.09628 11.7041 4.18272 11.7213 4.27 11.7213C4.35729 11.7213 4.44372 11.7041 4.52437 11.6707C4.60501 11.6373 4.67828 11.5884 4.74 11.5267L7.8 8.46665C7.86181 8.40498 7.91084 8.33172 7.94429 8.25107C7.97775 8.17042 7.99497 8.08397 7.99497 7.99665C7.99497 7.90934 7.97775 7.82289 7.94429 7.74224C7.91084 7.66159 7.86181 7.58833 7.8 7.52665L4.74667 4.47332C4.48667 4.21332 4.06 4.21332 3.8 4.47332Z"
      fill="currentColor"
    />
    <path
      d="M8.19331 4.47331C8.13151 4.53498 8.08248 4.60824 8.04903 4.68889C8.01557 4.76954 7.99835 4.856 7.99835 4.94331C7.99835 5.03062 8.01557 5.11707 8.04903 5.19772C8.08248 5.27837 8.13151 5.35163 8.19331 5.41331L10.78 7.99997L8.19331 10.5866C8.06866 10.7113 7.99863 10.8804 7.99863 11.0566C7.99863 11.2329 8.06866 11.402 8.19331 11.5266C8.31797 11.6513 8.48703 11.7213 8.66331 11.7213C8.8396 11.7213 9.00866 11.6513 9.13331 11.5266L12.1933 8.46664C12.2551 8.40496 12.3041 8.33171 12.3376 8.25106C12.3711 8.17041 12.3883 8.08395 12.3883 7.99664C12.3883 7.90933 12.3711 7.82287 12.3376 7.74222C12.3041 7.66158 12.2551 7.58832 12.1933 7.52664L9.13331 4.46664C8.87998 4.21331 8.45331 4.21331 8.19331 4.47331Z"
      fill="currentColor"
    />
  </Svg>
);

export const Next = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M6.19334 10.5866L8.78 7.99997L6.19334 5.41331C6.13162 5.35158 6.08266 5.27831 6.04925 5.19767C6.01585 5.11703 5.99866 5.03059 5.99866 4.94331C5.99866 4.85602 6.01585 4.76959 6.04925 4.68894C6.08266 4.6083 6.13162 4.53503 6.19334 4.47331C6.25506 4.41158 6.32833 4.36262 6.40898 4.32922C6.48962 4.29582 6.57605 4.27863 6.66334 4.27863C6.75062 4.27863 6.83706 4.29582 6.9177 4.32922C6.99834 4.36262 7.07162 4.41158 7.13334 4.47331L10.1933 7.53331C10.4533 7.79331 10.4533 8.21331 10.1933 8.47331L7.13334 11.5333C7.07166 11.5951 6.9984 11.6441 6.91775 11.6776C6.8371 11.711 6.75065 11.7283 6.66334 11.7283C6.57603 11.7283 6.48957 11.711 6.40892 11.6776C6.32827 11.6441 6.25501 11.5951 6.19334 11.5333C5.94 11.2733 5.93334 10.8466 6.19334 10.5866Z"
      fill="currentColor"
    />
  </Svg>
);

export const Prev = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M9.80666 10.5866L7.21999 7.99997L9.80666 5.41331C9.86838 5.35158 9.91734 5.27831 9.95074 5.19767C9.98414 5.11703 10.0013 5.03059 10.0013 4.94331C10.0013 4.85602 9.98414 4.76959 9.95074 4.68894C9.91734 4.6083 9.86838 4.53503 9.80666 4.47331C9.74494 4.41158 9.67166 4.36262 9.59102 4.32922C9.51038 4.29582 9.42394 4.27863 9.33666 4.27863C9.24937 4.27863 9.16294 4.29582 9.08229 4.32922C9.00165 4.36262 8.92838 4.41158 8.86666 4.47331L5.80666 7.53331C5.74485 7.59498 5.69582 7.66824 5.66237 7.74889C5.62891 7.82954 5.61169 7.91599 5.61169 8.00331C5.61169 8.09062 5.62891 8.17707 5.66237 8.25772C5.69582 8.33837 5.74485 8.41163 5.80666 8.47331L8.86666 11.5333C9.12666 11.7933 9.54666 11.7933 9.80666 11.5333C10.06 11.2733 10.0667 10.8466 9.80666 10.5866Z"
      fill="currentColor"
    />
  </Svg>
);

export const Plus = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path
      d="M13 7H11V11H7V13H11V17H13V13H17V11H13V7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="currentColor"
    />
  </Svg>
);

export const Minus = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path
      d="M7 11V13H17V11H7ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"
      fill="currentColor"
    />
  </Svg>
);

export const Close = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 10.5 10.5" {...props}>
    <path
      d="M10.5 1.8075L9.4425 0.75L5.25 4.9425L1.0575 0.75L0 1.8075L4.1925 6L0 10.1925L1.0575 11.25L5.25 7.0575L9.4425 11.25L10.5 10.1925L6.3075 6L10.5 1.8075Z"
      fill="currentColor"
    />
  </Svg>
);
export const Review = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="1 -1 19 19" {...props}>
    <path
      d="M10.5 3.75C6.33331 3.75 2.77498 6.34167 1.33331 10C2.77498 13.6583 6.33331 16.25 10.5 16.25C14.6666 16.25 18.225 13.6583 19.6666 10C18.225 6.34167 14.6666 3.75 10.5 3.75ZM10.5 14.1667C8.19998 14.1667 6.33331 12.3 6.33331 10C6.33331 7.7 8.19998 5.83333 10.5 5.83333C12.8 5.83333 14.6666 7.7 14.6666 10C14.6666 12.3 12.8 14.1667 10.5 14.1667ZM10.5 7.5C9.11665 7.5 7.99998 8.61667 7.99998 10C7.99998 11.3833 9.11665 12.5 10.5 12.5C11.8833 12.5 13 11.3833 13 10C13 8.61667 11.8833 7.5 10.5 7.5Z"
      fill="currentColor"
    />
  </Svg>
);

export const Edit = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 22 21" {...props}>
    <path
      d="M3 17.25V21H6.75L17.81 9.94L14.06 6.19L3 17.25ZM20.71 7.04C21.1 6.65 21.1 6.02 20.71 5.63L18.37 3.29C17.98 2.9 17.35 2.9 16.96 3.29L15.13 5.12L18.88 8.87L20.71 7.04Z"
      fill="currentColor"
    />
  </Svg>
);

export const Delete = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 19 19" {...props}>
    <path
      d="M4.99999 15.8333C4.99999 16.75 5.74999 17.5 6.66666 17.5H13.3333C14.25 17.5 15 16.75 15 15.8333V5.83333H4.99999V15.8333ZM6.66666 7.5H13.3333V15.8333H6.66666V7.5ZM12.9167 3.33333L12.0833 2.5H7.91666L7.08332 3.33333H4.16666V5H15.8333V3.33333H12.9167Z"
      fill="currentColor"
    />
  </Svg>
);

export const History = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 20 20" {...props}>
    <path
      d="M11.7857 1.66699C9.60713 1.66699 7.51779 2.54497 5.97732 4.10777C4.43684 5.67057 3.57141 7.79019 3.57141 10.0003H0.833313L4.48411 13.6948L8.1349 10.0003H5.3968C5.3968 6.41699 8.25355 3.51884 11.7857 3.51884C15.3178 3.51884 18.1746 6.41699 18.1746 10.0003C18.1746 13.5837 15.3178 16.4818 11.7857 16.4818C10.0242 16.4818 8.42696 15.7503 7.27696 14.5744L5.98093 15.8892C6.74159 16.6651 7.64614 17.2806 8.64242 17.7002C9.6387 18.1197 10.707 18.335 11.7857 18.3337C13.9643 18.3337 16.0536 17.4557 17.5941 15.8929C19.1345 14.3301 20 12.2105 20 10.0003C20 7.79019 19.1345 5.67057 17.5941 4.10777C16.0536 2.54497 13.9643 1.66699 11.7857 1.66699ZM10.873 6.29662V10.9262L14.752 13.2596L15.4547 12.0744L12.242 10.1392V6.29662H10.873Z"
      fill="currentColor"
    />
  </Svg>
);

export const Download = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 20 20" {...props}>
    <path
      d="M15 12.4997V14.9997H4.99998V12.4997H3.33331V14.9997C3.33331 15.9163 4.08331 16.6663 4.99998 16.6663H15C15.9166 16.6663 16.6666 15.9163 16.6666 14.9997V12.4997H15ZM14.1666 9.16634L12.9916 7.99134L10.8333 10.1413V3.33301H9.16665V10.1413L7.00831 7.99134L5.83331 9.16634L9.99998 13.333L14.1666 9.16634Z"
      fill="currentColor"
    />
  </Svg>
);

export const Group = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M10.6667 7.33325C11.7734 7.33325 12.66 6.43992 12.66 5.33325C12.66 4.22659 11.7734 3.33325 10.6667 3.33325C9.56002 3.33325 8.66669 4.22659 8.66669 5.33325C8.66669 6.43992 9.56002 7.33325 10.6667 7.33325ZM5.33335 7.33325C6.44002 7.33325 7.32669 6.43992 7.32669 5.33325C7.32669 4.22659 6.44002 3.33325 5.33335 3.33325C4.22669 3.33325 3.33335 4.22659 3.33335 5.33325C3.33335 6.43992 4.22669 7.33325 5.33335 7.33325ZM5.33335 8.66659C3.78002 8.66659 0.666687 9.44659 0.666687 10.9999V12.6666H10V10.9999C10 9.44659 6.88669 8.66659 5.33335 8.66659ZM10.6667 8.66659C10.4734 8.66659 10.2534 8.67992 10.02 8.69992C10.7934 9.25992 11.3334 10.0133 11.3334 10.9999V12.6666H15.3334V10.9999C15.3334 9.44659 12.22 8.66659 10.6667 8.66659Z"
      fill="currentColor"
    />
  </Svg>
);

export const Courses = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M13 1.5H4.5C3.97007 1.50165 3.46232 1.71289 3.08761 2.08761C2.71289 2.46232 2.50165 2.97007 2.5 3.5V14C2.5 14.1326 2.55268 14.2598 2.64645 14.3536C2.74021 14.4473 2.86739 14.5 3 14.5H12C12.1326 14.5 12.2598 14.4473 12.3536 14.3536C12.4473 14.2598 12.5 14.1326 12.5 14C12.5 13.8674 12.4473 13.7402 12.3536 13.6464C12.2598 13.5527 12.1326 13.5 12 13.5H3.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5H13C13.1326 12.5 13.2598 12.4473 13.3536 12.3536C13.4473 12.2598 13.5 12.1326 13.5 12V2C13.5 1.86739 13.4473 1.74021 13.3536 1.64645C13.2598 1.55268 13.1326 1.5 13 1.5V1.5ZM11.5 7.5L9.9 6.3C9.85715 6.26655 9.80436 6.24838 9.75 6.24838C9.69564 6.24838 9.64285 6.26655 9.6 6.3L8 7.5V2.5H11.5V7.5Z"
      fill="currentColor"
    />
  </Svg>
);

export const Curators = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M5.00002 1.33325C5.35364 1.33325 5.69278 1.47373 5.94283 1.72378C6.19288 1.97382 6.33335 2.31296 6.33335 2.66659C6.33335 3.02021 6.19288 3.35935 5.94283 3.60939C5.69278 3.85944 5.35364 3.99992 5.00002 3.99992C4.6464 3.99992 4.30726 3.85944 4.05721 3.60939C3.80716 3.35935 3.66669 3.02021 3.66669 2.66659C3.66669 2.31296 3.80716 1.97382 4.05721 1.72378C4.30726 1.47373 4.6464 1.33325 5.00002 1.33325ZM4.00002 4.66659H6.00002C6.35364 4.66659 6.69278 4.80706 6.94283 5.05711C7.19288 5.30716 7.33335 5.6463 7.33335 5.99992V9.66659H6.33335V14.6666H3.66669V9.66659H2.66669V5.99992C2.66669 5.6463 2.80716 5.30716 3.05721 5.05711C3.30726 4.80706 3.6464 4.66659 4.00002 4.66659ZM9.66669 7.99992C9.66669 7.6463 9.80716 7.30716 10.0572 7.05711C10.3073 6.80706 10.6464 6.66659 11 6.66659C11.3536 6.66659 11.6928 6.80706 11.9428 7.05711C12.1929 7.30716 12.3334 7.6463 12.3334 7.99992C12.3334 8.35354 12.1929 8.69268 11.9428 8.94273C11.6928 9.19278 11.3536 9.33325 11 9.33325C10.6464 9.33325 10.3073 9.19278 10.0572 8.94273C9.80716 8.69268 9.66669 8.35354 9.66669 7.99992ZM9.00002 9.99992H13V12.6666H12V14.6666H10V12.6666H9.00002V9.99992Z"
      fill="currentColor"
    />
  </Svg>
);
export const Voting = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 17" {...props}>
    <path
      d="M12 9.16675H11.5467L10.2133 10.5001H11.4867L12.6667 11.8334H3.33333L4.52 10.5001H5.88667L4.55333 9.16675H4L2 11.1667V13.8334C2 14.187 2.14048 14.5262 2.39052 14.7762C2.64057 15.0263 2.97971 15.1667 3.33333 15.1667H12.6667C13.0203 15.1667 13.3594 15.0263 13.6095 14.7762C13.8595 14.5262 14 14.187 14 13.8334V11.1667L12 9.16675ZM11.3333 5.80008L8.03333 9.10008L5.66667 6.74008L8.97333 3.44008L11.3333 5.80008ZM8.50667 2.02675L4.26 6.27341C4.1982 6.33509 4.14917 6.40835 4.11571 6.489C4.08226 6.56965 4.06504 6.6561 4.06504 6.74341C4.06504 6.83073 4.08226 6.91718 4.11571 6.99783C4.14917 7.07848 4.1982 7.15174 4.26 7.21341L7.56 10.5001C7.82 10.7734 8.24 10.7734 8.5 10.5001L12.74 6.27341C12.8018 6.21174 12.8508 6.13848 12.8843 6.05783C12.9177 5.97718 12.935 5.89073 12.935 5.80341C12.935 5.7161 12.9177 5.62965 12.8843 5.549C12.8508 5.46835 12.8018 5.39509 12.74 5.33341L9.44 2.03341C9.37985 1.97048 9.30768 1.92027 9.22776 1.88577C9.14783 1.85126 9.06179 1.83316 8.97474 1.83254C8.88769 1.83191 8.80141 1.84878 8.721 1.88215C8.64059 1.91551 8.56771 1.96468 8.50667 2.02675Z"
      fill="currentColor"
    />
  </Svg>
);
export const buttonNav = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 24 24" {...props}>
    <path d="M19 12H10" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 19H5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M19 5H5" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 15L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
    <path d="M7 9L4 12" stroke="white" strokeWidth="2" strokeLinecap="round" />
  </Svg>
);

export const Administrators = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M9.33331 4.6665H6.66665C5.93331 4.6665 5.33331 5.2665 5.33331 5.99984V9.99984H6.66665V14.6665H9.33331V9.99984H10.6666V5.99984C10.6666 5.2665 10.0666 4.6665 9.33331 4.6665Z"
      fill="currentColor"
    />
    <path
      d="M8.00002 4.00016C8.7364 4.00016 9.33335 3.40321 9.33335 2.66683C9.33335 1.93045 8.7364 1.3335 8.00002 1.3335C7.26364 1.3335 6.66669 1.93045 6.66669 2.66683C6.66669 3.40321 7.26364 4.00016 8.00002 4.00016Z"
      fill="currentColor"
    />
  </Svg>
);
export const Estimates = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M7.99998 11.5135L12.12 14.0002L11.0266 9.3135L14.6666 6.16016L9.87331 5.7535L7.99998 1.3335L6.12665 5.7535L1.33331 6.16016L4.97331 9.3135L3.87998 14.0002L7.99998 11.5135Z"
      fill="currentColor"
    />
  </Svg>
);
export const IndividualPlan = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M13 1.5H4.5C3.97007 1.50165 3.46232 1.71289 3.08761 2.08761C2.71289 2.46232 2.50165 2.97007 2.5 3.5V14C2.5 14.1326 2.55268 14.2598 2.64645 14.3536C2.74021 14.4473 2.86739 14.5 3 14.5H12C12.1326 14.5 12.2598 14.4473 12.3536 14.3536C12.4473 14.2598 12.5 14.1326 12.5 14C12.5 13.8674 12.4473 13.7402 12.3536 13.6464C12.2598 13.5527 12.1326 13.5 12 13.5H3.5C3.5 13.2348 3.60536 12.9804 3.79289 12.7929C3.98043 12.6054 4.23478 12.5 4.5 12.5H13C13.1326 12.5 13.2598 12.4473 13.3536 12.3536C13.4473 12.2598 13.5 12.1326 13.5 12V2C13.5 1.86739 13.4473 1.74021 13.3536 1.64645C13.2598 1.55268 13.1326 1.5 13 1.5ZM11.5 7.5L9.9 6.3C9.85715 6.26655 9.80436 6.24838 9.75 6.24838C9.69564 6.24838 9.64285 6.26655 9.6 6.3L8 7.5V2.5H11.5V7.5Z"
      fill="currentColor"
    />
  </Svg>
);

export const StudentModalArrow = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 10 16" {...props}>
    <path
      d="M0.258463 8.532L9.72899 15.964C9.75374 15.9835 9.78348 15.9957 9.8148 15.9991C9.84612 16.0024 9.87774 15.9968 9.90604 15.9829C9.93434 15.969 9.95817 15.9474 9.97479 15.9205C9.99141 15.8937 10.0001 15.8626 10 15.831V14.1994C10 14.0959 9.95168 13.9967 9.87185 13.9334L2.30887 8.00009L9.87185 2.06677C9.95378 2.00344 10 1.90424 10 1.80081V0.169201C10 0.027781 9.83823 -0.0503166 9.72899 0.0362242L0.258463 7.46818C0.177969 7.53126 0.112854 7.61196 0.0680666 7.70413C0.0232795 7.7963 0 7.89752 0 8.00009C0 8.10266 0.0232795 8.20387 0.0680666 8.29605C0.112854 8.38822 0.177969 8.46891 0.258463 8.532Z"
      fill="currentColor"
      fillOpacity="0.85"
    />
  </Svg>
);
export const Teachers = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M13.5 2.5H2.5C2.23478 2.5 1.98043 2.60536 1.79289 2.79289C1.60536 2.98043 1.5 3.23478 1.5 3.5V12.5C1.5 12.7652 1.60536 13.0196 1.79289 13.2071C1.98043 13.3946 2.23478 13.5 2.5 13.5H3.3375C3.43218 13.5003 3.52494 13.4733 3.60472 13.4223C3.6845 13.3714 3.74795 13.2985 3.7875 13.2125C4.03214 12.7005 4.4167 12.2682 4.8967 11.9656C5.37671 11.663 5.93256 11.5024 6.5 11.5024C7.06744 11.5024 7.62329 11.663 8.1033 11.9656C8.5833 12.2682 8.96786 12.7005 9.2125 13.2125C9.25205 13.2985 9.3155 13.3714 9.39528 13.4223C9.47506 13.4733 9.56782 13.5003 9.6625 13.5H13.5C13.7652 13.5 14.0196 13.3946 14.2071 13.2071C14.3946 13.0196 14.5 12.7652 14.5 12.5V3.5C14.5 3.23478 14.3946 2.98043 14.2071 2.79289C14.0196 2.60536 13.7652 2.5 13.5 2.5ZM6.5 10.5C6.10444 10.5 5.71776 10.3827 5.38886 10.1629C5.05996 9.94318 4.80362 9.63082 4.65224 9.26537C4.50087 8.89992 4.46126 8.49778 4.53843 8.10982C4.6156 7.72186 4.80608 7.36549 5.08579 7.08579C5.36549 6.80608 5.72186 6.6156 6.10982 6.53843C6.49778 6.46126 6.89991 6.50087 7.26537 6.65224C7.63082 6.80362 7.94318 7.05996 8.16294 7.38886C8.3827 7.71776 8.5 8.10444 8.5 8.5C8.49835 9.02993 8.28711 9.53768 7.91239 9.91239C7.53768 10.2871 7.02993 10.4984 6.5 10.5ZM13.5 12.5H9.9625C9.74587 12.1243 9.46931 11.7865 9.14375 11.5H12C12.1326 11.5 12.2598 11.4473 12.3536 11.3536C12.4473 11.2598 12.5 11.1326 12.5 11V5C12.5 4.86739 12.4473 4.74022 12.3536 4.64645C12.2598 4.55268 12.1326 4.5 12 4.5H4C3.86739 4.5 3.74021 4.55268 3.64645 4.64645C3.55268 4.74022 3.5 4.86739 3.5 5V11C3.50063 11.1104 3.53776 11.2174 3.60559 11.3045C3.67342 11.3915 3.76815 11.4537 3.875 11.4813C3.54156 11.7723 3.25857 12.1166 3.0375 12.5H2.5V3.5H13.5V12.5Z"
      fill="currentColor"
    />
  </Svg>
);
export const Students = ({ ...props }: Record<any, any>): JSX.Element => (
  <Svg viewBox="0 0 16 16" {...props}>
    <path
      d="M14.1563 3.52496L8.15626 1.52496C8.05445 1.49363 7.94557 1.49363 7.84376 1.52496L1.85001 3.52496H1.83751L1.77501 3.55621H1.76876L1.70626 3.59371C1.70626 3.59996 1.70001 3.59996 1.69376 3.60621L1.64376 3.64996L1.60001 3.69996C1.60001 3.70621 1.59376 3.70621 1.59376 3.71246L1.55626 3.76871C1.55626 3.77496 1.55626 3.77496 1.55001 3.78121L1.52501 3.83746L1.50626 3.90621V3.92496C1.5001 3.94945 1.49799 3.97479 1.50001 3.99996V8.99996C1.50001 9.13257 1.55269 9.25975 1.64646 9.35352C1.74023 9.44729 1.8674 9.49996 2.00001 9.49996C2.13262 9.49996 2.2598 9.44729 2.35357 9.35352C2.44733 9.25975 2.50001 9.13257 2.50001 8.99996V4.69371L4.60001 5.39371C4.20549 6.02521 3.99749 6.75536 4.00001 7.49996C4.00024 8.17715 4.1724 8.8432 4.50034 9.43569C4.82829 10.0282 5.30129 10.5277 5.87501 10.8875C4.68276 11.3385 3.66492 12.1571 2.96876 13.225C2.8978 13.3372 2.87376 13.4728 2.90182 13.6025C2.92988 13.7323 3.00779 13.8458 3.11876 13.9187C3.17322 13.9548 3.2343 13.9797 3.29846 13.992C3.36262 14.0043 3.42859 14.0038 3.49253 13.9904C3.55648 13.977 3.61714 13.9511 3.67099 13.9141C3.72484 13.8771 3.77082 13.8298 3.80626 13.775C4.26009 13.0759 4.88147 12.5014 5.6139 12.1036C6.34632 11.7059 7.16656 11.4975 8.00001 11.4975C8.83347 11.4975 9.6537 11.7059 10.3861 12.1036C11.1186 12.5014 11.7399 13.0759 12.1938 13.775C12.2394 13.8443 12.3016 13.9011 12.3747 13.9404C12.4478 13.9797 12.5295 14.0002 12.6125 14C12.7083 14.001 12.8021 13.9726 12.8813 13.9187C12.9922 13.8458 13.0701 13.7323 13.0982 13.6025C13.1263 13.4728 13.1022 13.3372 13.0313 13.225C12.3351 12.1571 11.3173 11.3385 10.125 10.8875C10.6987 10.5277 11.1717 10.0282 11.4997 9.43569C11.8276 8.8432 11.9998 8.17715 12 7.49996C12.0025 6.75536 11.7945 6.02521 11.4 5.39371L14.1563 4.47496C14.2563 4.44208 14.3434 4.37846 14.4051 4.29317C14.4669 4.20787 14.5001 4.10526 14.5001 3.99996C14.5001 3.89466 14.4669 3.79205 14.4051 3.70676C14.3434 3.62146 14.2563 3.55784 14.1563 3.52496V3.52496ZM8.00001 10.5C7.20436 10.5 6.4413 10.1839 5.87869 9.62128C5.31608 9.05868 5.00001 8.29561 5.00001 7.49996C5.00122 6.8598 5.20465 6.23638 5.58126 5.71871L7.84376 6.47496C7.94525 6.50835 8.05477 6.50835 8.15626 6.47496L10.4188 5.71871C10.7954 6.23638 10.9988 6.8598 11 7.49996C11 8.29561 10.6839 9.05868 10.1213 9.62128C9.55873 10.1839 8.79566 10.5 8.00001 10.5Z"
      fill="currentColor"
    />
  </Svg>
);
