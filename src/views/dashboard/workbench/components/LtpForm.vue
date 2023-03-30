<template>
  <BasicForm @register="register" />
</template>
<script lang="ts" setup>
  import { BasicForm, useForm } from '/@/components/Form';
  import { renderLtpResult, schemas } from './data';
  import { useMessage } from '/@/hooks/web/useMessage';
  import { postLtpTask } from '../../../../api/ltp/ltp';

  const { createMessage } = useMessage();
  const [register, { validate, setProps, setFieldsValue }] = useForm({
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 15,
    },
    schemas: schemas,
    actionColOptions: {
      offset: 8,
      span: 23,
    },
    submitButtonOptions: {
      text: '提交',
    },
    submitFunc: customSubmitFunc,
  });

  async function customSubmitFunc() {
    try {
      let formData = await validate();
      console.log(formData);
      // setProps({
      //   submitButtonOptions: {
      //     loading: true,
      //   },
      // });
      const ltpResult = await postLtpTask({ texts: [formData.text], type: formData.type });
      console.log(ltpResult);
      if (ltpResult) {
        formData['cws'] = renderLtpResult(ltpResult, 'cws');
        formData['res'] = renderLtpResult(ltpResult, formData.type);
        setFieldsValue(formData);
      }

      // setTimeout(() => {
      //   setProps({
      //     submitButtonOptions: {
      //       loading: false,
      //     },
      //   });
      //   createMessage.success('提交成功！');
      // }, 2000);
    } catch (error) {}
  }
</script>
