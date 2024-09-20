import { Coffee, Dallars, Orders } from 'common/components/icons';
import Card from '../components/Card';

/**
 * 백엔드 데이터가 없기 때문에 임시 데이터로 대체
 */

const CARD_LIST_ARR = [
  <Card title="Total Menus" icon={Coffee} total={50} due={30} />,
  <Card title="Total Revenue" icon={Dallars} total={`120K`} due={30} />,
  <Card title="Total Orders" icon={Orders} total={226} due={30} />,
];

const STORE_CARD_LIST_ARR = [
  <Card
    titleText
    border
    width={209}
    height={113}
    title="On Delivery"
    total={50}
  />,
  <Card
    titleText
    border
    width={209}
    height={113}
    title="Deliverd"
    total={12}
  />,
  <Card
    titleText
    border
    width={209}
    height={113}
    title="Canceled"
    total={226}
  />,
];

const PAGE_SIZE = 10;

export { CARD_LIST_ARR, STORE_CARD_LIST_ARR, PAGE_SIZE };
