/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

import { Button } from "components";

export default function Component() {
  return (
    <div>
      <Button css={[_button]} backgroundColor="accent">
        123
      </Button>
    </div>
  );
}

const _button = css`
  width: 120px;
`;
