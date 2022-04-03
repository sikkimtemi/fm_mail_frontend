import { VFC } from 'react';
import TokusyouhouContent from '../components/TokusyouhouContent';
import PublicLayout from '../components/layouts/PublicLayout';

// 特定商取引法に基づく表記
const Tokusyouhou: VFC = () => (
  <PublicLayout>
    <TokusyouhouContent />
  </PublicLayout>
);

export default Tokusyouhou;
