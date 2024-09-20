/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from 'react';
import { css } from '@emotion/react';
import { Button, Input } from 'common/components';

import type { KaKaoMapCompleteType, KakaoMapTypes } from '../types';
import colors from 'styles/color';
import fonts from 'styles/font';
import { useFormContext } from 'react-hook-form';

/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * KakaoMap API
 */
declare global {
  interface Window {
    kakao: any;
    daum: any;
  }
}

const KakaoMap = ({ location }: { location: KakaoMapTypes }) => {
  const [address, setAddress] = useState<string>(''); // 주소 상태 관리
  const [zoneCode, setZoneCode] = useState<string>(''); // 우편번호 상태 관
  const [jibunAddr, setJibunAddr] = useState<string>(''); // 지번주소 상태 관리
  const [detailAddr, setDetailAddr] = useState<string>(''); // 상세주소 상태 관리

  const mapContainer = useRef<HTMLDivElement>(null);
  const markerRef = useRef<any>(null);
  const mapRef = useRef<any>(null);

  const [coords, setCoords] = useState<KakaoMapTypes>({
    lat: location.lat,
    lng: location.lng,
  });

  const { setValue } = useFormContext();

  useEffect(() => {
    const kakaoMapScript = document.createElement('script');
    kakaoMapScript.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${import.meta.env.VITE_KAKAO_MAP_KEY}&libraries=services&autoload=false`;
    kakaoMapScript.async = true;

    const daumPostcodeScript = document.createElement('script');
    daumPostcodeScript.src =
      '//t1.daumcdn.net/mapjsapi/bundle/postcode/prod/postcode.v2.js';
    daumPostcodeScript.async = true;

    document.head.appendChild(kakaoMapScript);
    document.head.appendChild(daumPostcodeScript);

    kakaoMapScript.onload = () => {
      window.kakao.maps.load(() => {
        const mapOption = {
          center: new window.kakao.maps.LatLng(coords.lat, coords.lng), // 초기 지도 중심
          level: 5, // 초기 지도 확대 레벨
        };

        const map = new window.kakao.maps.Map(mapContainer.current, mapOption); // 지도 생성
        mapRef.current = map;

        const marker = new window.kakao.maps.Marker({
          position: new window.kakao.maps.LatLng(coords.lat, coords.lng),
          map: map,
        });
        markerRef.current = marker; // 마커 저장
      });
    };

    return () => {
      document.head.removeChild(kakaoMapScript); // 컴포넌트 언마운트 시 스크립트 제거
      document.head.removeChild(daumPostcodeScript); // Daum Postcode 스크립트 제거
    };
  }, [coords]);

  // 주소 검색 버튼 클릭 이벤트
  const searchAddress = () => {
    new window.daum.Postcode({
      oncomplete: function (data: KaKaoMapCompleteType) {
        const addr = data.roadAddress;
        const jibun = data.jibunAddress;
        const zone = data.zonecode;

        setAddress(addr); // 주소 상태 업데이트
        setZoneCode(zone); // 우편번호 상태 업데이트
        setJibunAddr(jibun); // 지번주소 상태 업데이트

        setValue('zipCode', zone);
        setValue('address', addr);

        const geocoder = new window.kakao.maps.services.Geocoder(); // 주소-좌표 변환 객체 생성

        const mapOption = {
          center: new window.kakao.maps.LatLng(location.lat, location.lng),
          level: 5,
        };

        // 주소로 좌표 검색
        geocoder.addressSearch(addr, function (results: any, status: any) {
          if (status === window.kakao.maps.services.Status.OK) {
            const result = results[0];
            const coords = new window.kakao.maps.LatLng(result.y, result.x);

            const newCoords = {
              lat: parseFloat(result.y),
              lng: parseFloat(result.x),
            };

            setCoords(newCoords); // 좌표 상태 업데이트

            setValue('latitude', newCoords.lat);
            setValue('longitude', newCoords.lng);

            const map = new window.kakao.maps.Map(
              mapContainer.current,
              mapOption,
            ); // 지도 생성

            const marker = new window.kakao.maps.Marker({
              position: coords,
              map: map,
            });

            // 지도의 중심을 검색된 좌표로 이동
            map.setCenter(coords);

            // 마커를 검색된 좌표로 이동
            marker.setPosition(coords);
          }
        });
      },
    }).open();
  };

  const handleDetailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetailAddr(e.target.value);
    setValue('addressDetail', e.target.value);

    console.log(e.target.value);
  };

  return (
    <div css={_wrapperMap}>
      <div css={_wrapperInput}>
        <span css={_label}>바뀔 주소</span>

        <div css={_inputGroup}>
          <div css={_wrapperPostAddr}>
            <Input
              css={_postAddr}
              placeholder="우편번호"
              readOnly
              value={zoneCode}
            />
            <Button
              type="button"
              css={_button}
              onClick={searchAddress}
              value={zoneCode}
            >
              우편번호 찾기
            </Button>
          </div>

          <div css={_wrapperAddr}>
            <Input
              css={_input}
              placeholder="도로명 주소"
              readOnly
              value={address}
            />
            <Input
              css={_input}
              placeholder="지번주소"
              readOnly
              value={jibunAddr}
            />
          </div>

          <Input
            css={_input}
            placeholder="상세주소"
            value={detailAddr}
            onChange={(e) => handleDetailChange(e)}
          />
        </div>
      </div>

      <div>
        <span css={_label}>위치</span>
        <div ref={mapContainer} css={_map} />
      </div>
    </div>
  );
};

export default KakaoMap;

const _wrapperMap = css`
  display: flex;
  flex-direction: column;
  position: relative;
  gap: 12px;
`;

const _map = css`
  width: 75%;
  height: 400px;
  margin-top: 10px;
`;

const _inputGroup = css`
  display: flex;
  flex-direction: column;
  gap: 8px;
  width: 75%;
`;

const _label = [
  css`
    color: ${colors.textThird};
  `,
  fonts['16_600'],
];

const _input = css`
  width: 100%;
`;

const _button = css`
  padding: 8px 16px;
`;

const _wrapperInput = css`
  display: flex;
  flex-direction: column;
`;

const _wrapperAddr = css`
  display: flex;
  gap: 8px;
`;

const _wrapperPostAddr = css`
  display: flex;
  justify-content: space-between;
`;

const _postAddr = css`
  width: 30%;
  margin-right: 8px;
`;
