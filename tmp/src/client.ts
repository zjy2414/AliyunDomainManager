// This file is auto-generated, don't edit it
import Console from '@alicloud/tea-console';
import Util from '@alicloud/tea-util';
import RPC, * as $RPC from '@alicloud/rpc-client';
import DNS, * as $DNS from '@alicloud/alidns20150109';
import * as $tea from '@alicloud/tea-typescript';


export default class Client {

  /**
  * Initialization  初始化公共请求参数
  */
  static Initialization(accessKeyId: string, accessKeySecret: string): DNS {
    let config = new $RPC.Config({ });
    // 传AccessKey ID入config
    config.accessKeyId = accessKeyId;
    // 传AccessKey Secret入config
    config.accessKeySecret = accessKeySecret;
    return new DNS(config);
  }

  /**
  * DescribeDomains    查询账户下域名
  */
  static async DescribeDomains(client: DNS): Promise<void> {
    let req = new $DNS.DescribeDomainsRequest({ });
    let resp = await client.describeDomains(req);
    Console.log("--------------------查询域名列表(json格式数据)--------------------");
    Console.log(Util.toJSONString($tea.toMap(resp)));
  }

  static async main(): Promise<void> {
    let client = Client.Initialization("LTAIxgq0zffrA9KL", "0WkzUGvSZmu8qbJ6HaTWEzgc9WEoVN");
    // 查询可管理的域名
    await Client.DescribeDomains(client);
  }

}
