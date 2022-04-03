import { VFC } from 'react';
import DocContent from '../components/DocContent';
import PublicLayout from '../components/layouts/PublicLayout';

// 使い方ガイド
const Doc: VFC = () => (
  <PublicLayout>
    <DocContent />
  </PublicLayout>
);

export default Doc;
