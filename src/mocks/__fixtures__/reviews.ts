export const reviewsMockData = {
  list: {
    "response": {
      "grade": 3, // 평균 평점
      "reviews": [
        {
            "reviewId": 1,
            "content": "리뷰 내용",
            "grade": 1, // 1 ~ 5 범위
            "images": [
                {
                    "seq": 1,
                    "imageUrl": "서버에 저장된 이미지 경로"
                },
                {
                    "seq": 2,
                    "imageUrl": "서버에 저장된 이미지 경로"
                }
            ],
            "reviewDate": "2024-08-20 20:00:00"
        },
        {
            "reviewId": 2,
            "content": "리뷰 내용",
            "grade": 5, // 1 ~ 5 범위
            "images": [
                {
                    "seq": 1,
                    "imageUrl": "서버에 저장된 이미지 경로"
                },
                {
                    "seq": 2,
                    "imageUrl": "서버에 저장된 이미지 경로"
                }
            ],
            "reviewDate": "2024-08-20 20:00:00"
        }
      ]
    }
  }
}