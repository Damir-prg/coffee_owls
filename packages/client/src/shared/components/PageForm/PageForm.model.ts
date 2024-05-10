import type { FormRule } from 'antd';

export type TFieldType = {
  name: string;
  placeholder: string;
  type: string;
  rules?: FormRule[];
  dependencies?: string[];
};

export interface IPageFormProps {
  formName: string;
  title: string;
  fields: TFieldType[];
  button: {
    type: 'primary' | 'default';
    text: string;
  };
  formError?: {
    isShow: boolean;
    status: number;
  };
  link?: {
    text: string;
    path: string;
  };
  onSubmit: (formData: Record<string, unknown>) => void;
}
