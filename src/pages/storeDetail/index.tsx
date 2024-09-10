/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import useAuth from 'common/hooks/useAuth';

const StoreDetail = ({ ...rest }) => {
  const { AuthGuard } = useAuth(["owner", "admin"]);

  return (
    <AuthGuard>
      <div css={[_container]} {...rest}>
        <div>
          testtests
        </div>
      </div>
    </AuthGuard>
  )
};

export default StoreDetail;

const _container = css``;
