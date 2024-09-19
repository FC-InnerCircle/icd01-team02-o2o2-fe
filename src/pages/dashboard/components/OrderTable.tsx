/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import fonts from 'styles/font';

import {
  ColumnDef,
  getCoreRowModel,
  useReactTable,
  flexRender,
  getSortedRowModel, // 정렬된 행 모델을 가져오는 함수
  SortingState, // 정렬 상태 타입
} from '@tanstack/react-table';
import { useGetStoresOrders } from 'queries/modules/stores/useStoresQuery';
import { Order } from 'api/modules/stores/types';

import get from 'lodash/get';
import colors from 'styles/color';
import { useMemo, useState } from 'react';
import { formatToKoreanCurrency } from 'utils/formatTokoCurrency';
import { UpdownArrow } from 'common/components/icons';
import { PAGE_SIZE } from '../constants';
import { cloneDeep } from 'lodash';

/**
 * TODO:
 * 시간관계상 Table을 공통 컴포넌트로 분리하지 않고, OwnerHome 컴포넌트에 직접 구현
 * 추후 Table 컴포넌트로 분리하여 재사용성을 높일 예정
 */

const OrderTable = () => {
  const { data } = useGetStoresOrders(1);
  const orderData: Order[] = get(data, 'response.orders', []);

  // 정렬 상태 관리
  const [sorting, setSorting] = useState<SortingState>([]);

  // 페이지 네이션
  const [pageIndex, setPageIndex] = useState(0); // 현재 페이지

  const columns: ColumnDef<Order>[] = useMemo(
    () => [
      {
        header: 'OrderID',
        accessorKey: 'orderId',
        enableSorting: true,
      },
      {
        header: 'storeName',
        accessorKey: 'storeName',
        enableSorting: true,
      },
      {
        header: 'ordererName',
        accessorKey: 'ordererName',
        enableSorting: true,
      },
      {
        header: 'menutotalPrice',
        accessorKey: 'menutotalPrice',
        accessorFn: (data) => formatToKoreanCurrency(data.menutotalPrice),
        enableSorting: true,
      },
      {
        header: 'status',
        accessorKey: 'status',
        enableSorting: true,
      },
    ],
    [],
  );

  const currentPageData = useMemo(() => {
    const start = pageIndex * PAGE_SIZE;
    const end = start + PAGE_SIZE;
    const orderTableData = cloneDeep(orderData);

    return orderTableData.slice(start, end);
  }, [orderData, pageIndex]);

  // table hooks 사용
  const table = useReactTable({
    data: currentPageData,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {
      sorting,
    },
    onSortingChange: setSorting, // 정렬 상태 변경 핸들러
  });

  return (
    <>
      <div css={_mainTxt}>New Order</div>
      <table css={_table}>
        <thead>
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} css={_header}>
                  <div css={_icoWrapper}>
                    {flexRender(
                      header.column.columnDef.header,
                      header.getContext(),
                    )}
                    <span
                      onClick={header.column.getToggleSortingHandler()}
                      css={_arrowWrapper}
                    >
                      {
                        header.column.getIsSorted() ? (
                          header.column.getIsSorted() === 'asc' ? (
                            <Arrow clicked={'up'} />
                          ) : (
                            <Arrow clicked={'down'} />
                          )
                        ) : (
                          <Arrow clicked={'none'} />
                        ) // 정렬되지 않은 상태의 기본 아이콘
                      }
                    </span>
                  </div>
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody css={_tbody}>
          {table.getRowModel().rows.map((row) => (
            <tr key={row.id}>
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id}>
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* 페이지네이션 컨트롤 */}
      <div css={_pagination}>
        <button
          onClick={() => setPageIndex((prev) => Math.max(prev - 1, 0))}
          disabled={pageIndex === 0}
        >
          이전 페이지
        </button>
        <span>
          {`${pageIndex + 1} / ${Math.ceil(orderData.length / PAGE_SIZE)} 페이지`}
        </span>
        <button
          onClick={() => setPageIndex((prev) => prev + 1)}
          disabled={currentPageData.length < PAGE_SIZE}
        >
          다음 페이지
        </button>
      </div>
    </>
  );
};

const StyledArrow = styled(UpdownArrow)<{ state: 'none' | 'up' | 'down' }>`
  width: 18px;
  height: 18px;

  /* 위쪽 화살표 색상 변경 */
  path:first-of-type {
    fill: ${({ state }) => (state === 'up' ? colors.textMuted : '#d3d3e0')};
  }

  /* 아래쪽 화살표 색상 변경 */
  path:last-of-type {
    fill: ${({ state }) => (state === 'down' ? colors.textMuted : '#d3d3e0')};
  }
`;

const Arrow = ({ clicked }: { clicked: 'none' | 'up' | 'down' }) => {
  return <StyledArrow state={clicked} />;
};

export default OrderTable;

const _mainTxt = css`
  ${fonts['24_800']};
  margin-bottom: 20px;
`;

const _table = css`
  width: 100%;
  border-collapse: collapse;
  background-color: ${colors.white};
  border-radius: 12px;

  th,
  td {
    padding: 2% 4%;
    border-bottom: 1px solid #e9ecff;
  }

  td {
    color: ${colors.textMuted};
  }
`;

const _header = [css``, fonts['18_500']];

const _tbody = [css``, fonts['16_400']];

const _icoWrapper = css`
  display: flex;
  gap: 4px;
`;

const _arrowWrapper = css`
  cursor: pointer;
`;

const _pagination = [
  css`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20px;
    gap: 10px;

    button {
      padding: 8px 12px;
      background-color: ${colors.primary};
      color: white;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:disabled {
        background-color: ${colors.lightGray};
        cursor: not-allowed;
      }
    }
  `,
  fonts['16_500'],
];
