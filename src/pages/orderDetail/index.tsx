/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import useAuth from 'common/hooks/useAuth';
import { useGetOrderQuery } from 'queries/modules/order/useGetOrderDetailQuery';
import { useParams } from 'react-router-dom';
import colors from 'styles/color';
import { commaize } from 'utils/commaize';

const OrderDetail = () => {
  const { AuthGuard } = useAuth(['owner', 'admin']);

  const { storeId, orderId } = useParams() as {
    storeId: string;
    orderId: string;
  };

  const { data: order } = useGetOrderQuery({
    storeId: Number(storeId),
    orderId: Number(orderId),
  });

  if (!order) {
    return null;
  }

  const { orderId: apiOrderId, price, menus, orderer, status } = order.response;

  return (
    <AuthGuard>
      <div css={[_container]}>
        <div
          css={css`
            display: flex;
            justify-content: space-between;
            align-items: center;
            font-size: 28px;
            font-weight: 600;
          `}
        >
          <div>
            주문번호: #{apiOrderId} / {commaize(price)}원
          </div>
          {/* TODO: 서버의 enum 확인후에 label과 매핑해주는 객체 이용해서 수정 */}
          <div>{status}</div>
        </div>
        <div
          css={css`
            display: flex;
            gap: 40px;
            margin-top: 36px;
          `}
        >
          <div
            css={css`
              display: flex;
              flex-direction: column;
              padding: 16px;
              width: 340px;
              border-radius: 20px;
              background-color: ${colors.white};
            `}
          >
            <div
              css={css`
                font-size: 20px;
                font-weight: 600;
              `}
            >
              주문자 정보
            </div>
            <div
              css={css`
                margin-top: 8px;
              `}
            >
              주문자 이름 : {orderer.name}
            </div>
            <div>주문자 전화번호 : {orderer.phone}</div>
            <div>배달 주소: {orderer.address}</div>
            <div>상세 주소: {orderer.addressDetail}</div>
            <div>우편번호: {orderer.zipCode}</div>
          </div>
          <div
            css={css`
              flex: 1;
              border-radius: 20px;
              background-color: ${colors.white};
              padding: 16px;
            `}
          >
            <div
              css={css`
                display: flex;
                justify-content: space-between;
                padding: 8px 0;
                border-bottom: 1px solid ${colors.gray};
                font-size: 20px;
                font-weight: 600;
              `}
            >
              <div>메뉴</div>
              <div>수량</div>
              <div>가격</div>
              <div>총 가격</div>
            </div>
            {menus.map(({ name, price, quantity }, index) => (
              <div
                key={index}
                css={css`
                  display: flex;
                  justify-content: space-between;
                  margin-top: 16px;
                `}
              >
                <div>{name}</div>
                <div>{quantity}</div>
                <div>{commaize(price)}원</div>
                <div>{commaize(price * quantity)}원</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </AuthGuard>
  );
};

export default OrderDetail;

const _container = css`
  padding: 40px 48px 92px;
`;
