import { defHttp } from '/@/utils/http/axios';
import { LtpTask, LtpResponse } from './model/ltpModel';
import { ErrorMessageMode } from '/#/axios';

enum Api {
  sent_split = '/sent_split',
  add_words = '/add_words',
  cws = '/cws',
  pos = '/pos',
  ner = '/ner',
  srl = '/srl',
  dep = '/dep',
  sdp = '/sdp',
  sdpg = '/sdpg',
  all = '/all',
}

/**
 * @description: Get user menu based on id
 */

export const postLtpTask = (params: LtpTask, _mode: ErrorMessageMode = 'modal') => {
  switch (params.type) {
    case 'sent_split':
      return defHttp.post<LtpResponse>({ url: Api.sent_split, params });
    case 'add_words':
      return defHttp.post<LtpResponse>({ url: Api.add_words, params });
    case 'cws':
      return defHttp.post<LtpResponse>({ url: Api.cws, params });
    case 'pos':
      return defHttp.post<LtpResponse>({ url: Api.pos, params });
    case 'ner':
      return defHttp.post<LtpResponse>({ url: Api.ner, params });
    case 'srl':
      return defHttp.post<LtpResponse>({ url: Api.srl, params });
    case 'dep':
      return defHttp.post<LtpResponse>({ url: Api.dep, params });
    case 'sdp':
      return defHttp.post<LtpResponse>({ url: Api.sdp, params });
    case 'sdpg':
      return defHttp.post<LtpResponse>({ url: Api.sdpg, params });
    case 'all':
      return defHttp.post<LtpResponse>({ url: Api.all, params });
    default:
      break;
  }
};
