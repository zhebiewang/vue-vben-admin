import { FormSchema } from '/@/components/Form';
import _ from 'lodash-es';

export const schemas: FormSchema[] = [
  {
    field: 'text',
    component: 'InputTextArea',
    label: '分析语句',
    colProps: {
      span: 16,
    },
    defaultValue: '汤姆是一个医生，旺财是一条狗。',
    componentProps: {
      placeholder: '请输入你的分析语句',
      rows: 4,
    },
    required: true,
  },
  {
    field: 'type',
    component: 'RadioGroup',
    label: '分析类型',
    colProps: {
      span: 16,
    },

    componentProps: {
      options: [
        {
          label: '分词',
          value: 'cws',
        },
        {
          label: '词性标注',
          value: 'pos',
        },
        {
          label: '命名实体识别',
          value: 'ner',
        },
        {
          label: '语义角色标注',
          value: 'srl',
        },
        {
          label: '依存句法分析',
          value: 'dep',
        },
        {
          label: '语义依存分析(树)',
          value: 'sdp',
        },
        {
          label: '语义依存分析(图)',
          value: 'sdpg',
        },
        {
          label: '全部',
          value: 'all',
        },
      ],
    },
    required: true,
  },
  {
    field: 'cws',
    component: 'InputTextArea',
    label: '分词结果',
    colProps: {
      span: 16,
    },
    componentProps: {
      rows: 4,
    },
    required: false,
  },
  {
    field: 'res',
    component: 'InputTextArea',
    label: '分析结果',
    colProps: {
      span: 16,
    },
    componentProps: {
      rows: 4,
    },
    required: false,
  },
];

export const renderLtpResult = (res: any, type: string) => {
  if (type === 'cws' || type === 'pos') {
    return _.chain(res[type])
      .map((item) => {
        return item.join('/');
      })
      .join('\n')
      .value();
  } else if (type === 'ner') {
    return _.chain(res[type])
      .map((ners) => {
        return _.chain(ners)
          .map((ner) => ner[1] + ':' + ner[0])
          .join('/')
          .value();
      })
      .join('\n')
      .value();
  } else if (
    type === 'srl' ||
    type === 'dep' ||
    type === 'dep' ||
    type === 'sdp' ||
    type === 'sdpg'
  ) {
    return _.chain(res[type])
      .map((srls) => {
        console.log(srls);
        return _.chain(srls)
          .map((srl) => JSON.stringify(srl))
          .join('\n')
          .value();
      })
      .join('========================================\n')
      .value();
  }
};
