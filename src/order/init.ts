/*
 * @Date: 2022-03-07 17:51:05
 * @Author: handsome_anthony
 * @LastEditors: handsome_anthony
 * @Description: 初始化macOS的配置
 */

import { prompt } from 'inquirer';
import {
  openAnySource,
  closeAnySource,
  installOhmyzsh,
  uninstallOhmyzsh
} from '../utils/shellCommand';

async function init(): Promise<void> {
  const options = [
    {
      value: 1,
      name: '1. 开启任何来源'
    },
    {
      value: 2,
      name: '2. 关闭任何来源'
    },
    {
      value: 3,
      name: '3. 安装oh-my-zsh'
    },
    {
      value: 4,
      name: '4. 卸载oh-my-zsh'
    }
  ]
  const selectedOption = await prompt([
    {
      type: 'list',
      name: 'value',
      message: '选择你要进行的操作',
      choices: options,
    }
  ])

  try {
    switch (selectedOption.value) {
      case 1:
        openAnySource();
        break;
      case 2:
        closeAnySource();
        break;
      case 3:
        installOhmyzsh();
        break;
      case 4:
        uninstallOhmyzsh();
        break;
      default:
        break;
    }
  } catch (error) {
    throw new Error(error);
  }

}



export default init;