declare module "*.svg" {
  import type * as React from "react";

  const ReactComponent: React.FunctionComponent<
    React.ComponentProps<"svg"> & { title?: string }
  >;

  export default ReactComponent;
}
//! svg 선언 아래로 내리면 안됩니다!
/// <reference types="vite/client" />
