import * as z from "zod";

// 유효성 검사를 위한 스키마 정의
export const loginSchema = z.object({
  accountId:
    z.string()
      .email("이메일을 입력해주세요."),
  password:
    z.string()
      .min(6, "비밀번호는 최소 6자리 이상이어야 합니다.")
      .regex(/^(?=.*[!@#$%^&*(),.?":{}|<>])/, "비밀번호에는 최소 하나의 특수 문자가 포함되어야 합니다."),
});
