/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';

const Profile = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["admin", "owner"]);

  return (
    <AuthGuard>
      <div css={[_container]} {...rest}>
        <div>
        </div>
      </div>
  </AuthGuard>
  )
};

export default Profile;

const _container = css``;
