import { VFC } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const body = `
# FM Mailの使い方

ここに使い方を載せる予定。

![テスト](/src/img/mail_receive.png)

key|value
-|-
test|これはテーブルのサンプルです。
`;

const DocContent: VFC = () => (
  <section className="bg-white py-6 sm:py-8 lg:py-12">
    <div className="prose mx-auto max-w-screen-md justify-center px-4 md:px-8">
      <ReactMarkdown remarkPlugins={[remarkGfm]}>{body}</ReactMarkdown>
    </div>
  </section>
);
export default DocContent;
