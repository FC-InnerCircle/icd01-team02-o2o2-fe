import { roleAtom, setTokenAtom, tokenAtom, UserRole } from 'atoms/authAtom';
import { useAtom } from 'jotai';

import { Navigate, useNavigate } from 'react-router-dom';
import { useAuthLogin, useAuthLogout } from 'queries/modules/auth/useAuthQuery';
import { removeTokenFromLocalStorage } from 'utils/authStorage';
import { LoginRequest } from 'api/modules/auth/types';
import { ROUTES } from 'common/constants/routes';

/**
 *
 * @param requiredRoles // 관리자 Role
 * @param redirectPath // 리다이렉트 경로
 * @returns {AuthResult}
 * @description
 * 인증 관련 Hook
 * - requiredRoles: 해당 페이지에 접근하기 위해 필요한 Role
 * - redirectPath: 인증되지 않은 사용자가 접근 시 리다이렉트 될 경로
 * - isAuthenticated: 인증된 사용자인지 여부
 * - AuthGuard: 인증된 사용자만 접근 가능한 페이지를 위한 컴포넌트
 * - login: 로그인 함수
 * - logout: 로그아웃 함수
 */

const useAuth = (
  requiredRoles: UserRole[],
  redirectPath: string = '/sign-in',
) => {
  const [role] = useAtom(roleAtom);
  const [token] = useAtom(tokenAtom);
  const [, setToken] = useAtom(setTokenAtom); // 쓰기 전용 토큰 설정 함수 사용

  const navigate = useNavigate();

  // 로그인 함수
  const { mutate: loginMutate, error: loginError } = useAuthLogin({
    onSuccess: (data) => {
      // 로그인 성공 시 토큰과 역할 저장
      const { accessToken, refreshToken } = data.response;

      setToken({ accessToken, refreshToken }); // 토큰 저장
      navigate(ROUTES.HOME); // 로그인 후 메인 페이지로 이동
    },
  });

  // 로그아웃 함수
  const { mutate: logoutMutate } = useAuthLogout({
    onSuccess: () => {
      // 로그아웃 성공 시 토큰과 역할 초기화
      removeTokenFromLocalStorage();
      setToken({ accessToken: null, refreshToken: null });
      navigate('/sign-in'); // 로그아웃 후 로그인 페이지로 이동
      // setRole(role);
    },
  });

  /**
   * TODO: 리프레시 토큰 구현
   * 리프레시 토큰은 백엔드 제공 후 axios interceptor를 통해 자동 갱신 구현해야함
   */
  // const { mutate: refreshMutate } = useAuthRefresh({
  //   onSuccess: (data) => {
  //     // 토큰 갱신 성공 시 토큰 업데이트
  //     setToken({ accessToken: data.response.accessToken, refreshToken: token.refreshToken });
  //   },
  // });

  // 인증된 사용자인지 확인
  const isAuthenticated = !!token.accessToken && requiredRoles?.includes(role);

  // AuthGurad
  const AuthGuard = ({ children }: { children: JSX.Element }) => {
    if (!token) {
      return (
        <Navigate to={redirectPath} state={{ from: window.location }} replace />
      ); // 로그인 안된 경우 리디렉트
    }

    if (!isAuthenticated) {
      return <Navigate to={redirectPath} replace />;
    }
    return children;
  };

  // 로그인 함수
  const login = async (payload: LoginRequest) => {
    loginMutate(payload);
  };

  const logout = () => {
    logoutMutate({ refreshToken: token.refreshToken! });
  };

  return {
    isAuthenticated,
    AuthGuard,
    login,
    loginError: loginError?.message ?? null,
    logout,
    role,
  };
};

export default useAuth;
