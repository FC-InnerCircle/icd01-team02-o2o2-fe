import { P1, P2, P3, P4 } from 'components/icons';

export const getProfileImg = (profileSrc: string): JSX.Element | null => {
  const profileImage: Record<string, JSX.Element> = {
    p1: <P1 width={54} height={54} />,
    p2: <P2 width={54} height={54} />,
    p3: <P3 width={54} height={54} />,
    p4: <P4 width={54} height={54} />,
  };

  return profileImage[profileSrc] || null;
};
