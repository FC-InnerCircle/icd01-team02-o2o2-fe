/* eslint-disable @typescript-eslint/no-explicit-any */
/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from '@tanstack/react-table';
import { Filter } from 'common/components';
import { Lightning } from 'common/components/icons';
import { Pagination } from 'common/components/pagination';
import { format } from 'date-fns';
import { useGetOrdersQuery } from 'queries/modules/order/useGetOrdersQuery';
import { ChangeEvent, useMemo } from 'react';
import {
  useLocation,
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';
import queryString from 'query-string';
import { commaize } from 'utils/commaize';
import colors from 'styles/color';

const STATUS_OPTIONS = [
  {
    label: '전체',
    value: 'all',
  },
  {
    label: '주문중',
    value: 'ORDER',
  },
  {
    label: '주문 취소',
    value: 'CANCEL',
  },
];

const Order = ({ ...rest }) => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { pathname } = useLocation();
  const params = useParams();

  const { storeId } = params as { storeId: string };

  const page = searchParams.get('page') ?? 1;
  const orderStatus = searchParams.get('orderStatus') ?? 'all';

  const handleChangeOrderStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    navigate(
      queryString.stringifyUrl({
        url: pathname,
        query: {
          page: 1,
          orderStatus: event.target.value,
        },
      }),
    );
  };

  const { data: orders } = useGetOrdersQuery(Number(storeId), {
    page: Number(page),
    status: orderStatus,
  });

  const columns = useMemo<ColumnDef<any>[]>(
    () => [
      {
        accessorKey: 'orderId',
        header: '주문번호',
      },
      {
        accessorFn: (row) => format(row.createdDate, 'yyyy'),
        header: '주문일자',
      },
      {
        accessorKey: 'ordererName',
        header: () => '주문자',
      },
      {
        accessorKey: 'storeName',
        header: () => '가게 이름',
      },
      {
        accessorFn: (row) => commaize(row.menuTotalPrice),
        header: '주문 금액',
        enableSorting: true,
      },
      {
        accessorKey: 'status',
        header: '주문 상태',
        enableSorting: true,
      },
    ],
    [],
  );

  const table = useReactTable({
    columns,
    // @ts-expect-error 데이터 타입을 확정하기 전에 임의로 any를 사용합니다.
    data: orders?.response?.orders as any[],
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
  });

  const handleClickPage = (page: number) => {
    navigate(
      queryString.stringifyUrl({
        url: pathname,
        query: {
          orderStatus,
          page,
        },
      }),
    );
  };

  const handleClickPrevPage = () => {
    navigate(
      queryString.stringifyUrl({
        url: pathname,
        query: {
          orderStatus,
          page: Number(page) - 1,
        },
      }),
    );
  };

  const handleClickNextPage = () => {
    navigate(
      queryString.stringifyUrl({
        url: pathname,
        query: {
          orderStatus,
          page: Number(page) + 1,
        },
      }),
    );
  };

  const gotoOrderDetail = (id: number) => {
    navigate(`/${storeId}/order/${id}`);
  };

  if (!orders) {
    return null;
  }

  return (
    <div css={_container} {...rest}>
      <div css={_header}>
        <div>
          <h1>주문</h1>
          <div>주문 내역을 확인하실 수 있어요.</div>
        </div>
        <div css={_filterWrapper}>
          <Filter
            leftSlot={<Lightning />}
            backgroundColor="lightBlue"
            placeholder="주문 상태"
            value={orderStatus}
            onChange={handleChangeOrderStatus}
            options={STATUS_OPTIONS}
          />
          {/* TODO: datepicker는 추후에 개발 */}
          {/* <Filter
            leftSlot={<Calendar />}
            backgroundColor="lightBlue"
            placeholder="주문 기간"
          /> */}
        </div>
      </div>

      <div css={_tableContainer}>
        <table>
          <thead>
            {table.getHeaderGroups().map((headerGroup) => (
              <tr key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <th
                    css={css`
                      padding: 20px;
                    `}
                    key={header.id}
                    colSpan={header.colSpan}
                  >
                    <div>
                      {flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody>
            {table.getRowModel().rows.map((row) => (
              <tr
                css={css`
                  cursor: pointer;
                  &:hover {
                    background-color: ${colors.secondary};
                  }
                `}
                key={row.id}
                onClick={() => gotoOrderDetail(row.original.orderId)}
              >
                {row.getVisibleCells().map((cell) => (
                  <td
                    key={cell.id}
                    css={css`
                      padding: 20px;
                    `}
                  >
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div css={_paginationContainer}>
        <div
          css={css`
            color: #3e4954;
          `}
        >
          총 주문 건수: {(orders as any)?.response?.totalCount}건
        </div>
        <Pagination
          currentPage={Number(page)}
          // @ts-expect-error 타입이 useQuery에서 안잡혀서 임시로 타입을 무시합니다.
          totalCount={orders?.response?.totalCount}
          onClickPage={handleClickPage}
          onClickPrevPage={handleClickPrevPage}
          onClickNextPage={handleClickNextPage}
        />
      </div>
    </div>
  );
};

export default Order;

const _container = css`
  padding: 40px 50px;
`;

const _header = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const _filterWrapper = css`
  display: flex;
  gap: 12px;
`;

const _tableContainer = css`
  margin-top: 24px;
  padding: 16px;
  background-color: ${colors.white};
  border-radius: 20px;
`;

const _paginationContainer = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 36px;
`;
