import * as core from '@actions/core';
import * as context from './context';
import * as utils from './utils';

/*
 * 使用AK/SK的方式配置IAM认证信息
 */
export async function configCciAuth(): Promise<void> {
  core.info('Configuring IAM Authentication Information Using AK/SK');
  const input: context.Inputs = context.getInputs();
  const result = await utils.execCommand(
    `cci-iam-authenticator generate-kubeconfig --cci-endpoint=https://cci.${input.region}.myhuaweicloud.com --ak=${input.accessKey} --sk=${input.secretKey}`
  );
  core.info('generate-kubeconfig result end.');
}
