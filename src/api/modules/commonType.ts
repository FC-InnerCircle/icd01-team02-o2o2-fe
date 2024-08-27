/**
 * 공통 타입
 */

// 공통 응답 타입
export type CommonResponseReturnType<ResponseData> = {
  response: ResponseData;
  code: string;
  message: string;
}
