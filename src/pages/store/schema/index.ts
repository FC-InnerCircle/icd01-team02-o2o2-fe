import * as z from 'zod';

const storeSchema = z.object({
  name: z.string().min(1, '이름은 필수입니다'), // 이름은 필수
  contactNumber: z.string().min(10, '연락처는 최소 10자 이상이어야 합니다'), // 연락처는 최소 10자 이상
  zipCode: z
    .string()
    .min(5, '우편번호는 최소 5자 이상이어야 합니다')
    .max(5, '우편번호는 최대 5자까지 가능합니다'), // 우편번호는 5자리
  address: z.string().min(1, '주소는 필수입니다'), // 주소는 필수
  addressDetail: z.string().min(1, '상세 주소는 필수입니다'), // 상세 주소는 필수
  latitude: z
    .number()
    .min(-90, '위도는 -90에서 90 사이여야 합니다')
    .max(90, '위도는 -90에서 90 사이여야 합니다'), // 위도는 -90에서 90 사이
  longitude: z
    .number()
    .min(-180, '경도는 -180에서 180 사이여야 합니다')
    .max(180, '경도는 -180에서 180 사이여야 합니다'), // 경도는 -180에서 180 사이
  openTime: z.string(),
  closeTime: z.string(),
  categories: z
    .array(z.string().min(1, '카테고리는 필수입니다'))
    .min(1, '최소 한 개의 카테고리가 필요합니다'), // 최소 한 개의 카테고리 필요
  minimumOrderAmount: z.number().min(0, '최소 주문 금액은 0 이상이어야 합니다'), // 최소 주문 금액은 0 이상
  deliveryArea: z.string().min(1, '배달 지역은 필수입니다'), // 배달 지역은 필수
  createdAt: z.string(),
  updatedAt: z.string(),
});

export { storeSchema };
