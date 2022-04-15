import { VFC } from 'react';

type ApiKeyInfo = {
  Type: string;
  ApiKey: string;
};
type Props = {
  index: number;
  item: ApiKeyInfo;
};

const APIKeyList: VFC<Props> = ({ index, item }) => (
  <tr className="text-gray-700">
    <td className="dark:border-dark-5 border-b-2 p-4">{index + 1}</td>
    <td className="dark:border-dark-5 border-b-2 p-4">{item.Type}</td>
    <td className="dark:border-dark-5 border-b-2 p-4">{item.ApiKey}</td>
    <td className="dark:border-dark-5 border-b-2 p-4">
      <button type="button">copy</button>
    </td>
  </tr>
);
export default APIKeyList;
