import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Translate, {translate} from "@docusaurus/Translate";

type FeatureItem = {
  title: string;
  src: string;
  description: JSX.Element;
};

const FeatureList: FeatureItem[] = [
  {
    title: translate({message: 'Công nghệ vượt trội'}),
    src: require('@site/static/img/cutting_edge_technology.png').default,
    description: (
        <Translate>
          Áp dụng công nghệ độc quyền trí tuệ nhân tạo (Artificial Intelligence) và máy học (Machine Learning) vào hệ
          thống, chúng tôi đảm bảo rằng các cuộc tấn công sẽ dừng lại trước khi chúng kịp gây ra bất kì tổn thất nào
          vào các hoạt động kinh doanh.
        </Translate>
    ),
  },
  {
    title: translate({message: 'Triển khai đơn giản'}),
    src: require('@site/static/img/easy-to-deploy.png').default,
    description: (
        <Translate>
          Chỉ mất vài phút cài đặt bằng cách thay đổi nhỏ đối với tên miền máy chủ hoặc CNAME, trang web của bạn đã
          được bảo vệ. Chúng tôi cung cấp cho bạn cái nhìn tổng quan về trạng thái trang web trên bảng điều khiển cũng
          như trên ứng dụng di động.
        </Translate>
    ),
  },
  {
    title: translate({message: 'Sử dụng dễ dàng'}),
    src: require('@site/static/img/easy-to-use.png').default,
    description: (
        <Translate>
          Nền tảng của chúng tôi được cấu hình mặc định với các quy tắc bảo vệ tối ưu. Trang web của bạn sẽ được bảo vệ
          ngay lập tức khỏi các mối đe dọa lớn nhất sau khi thiết lập thành công với Polaris. Ngoài ra, người dùng có
          thể tuỳ chỉnh các bộ luật một cách dễ dàng thông qua bảng điều khiển.
        </Translate>
    ),
  },
];

function Feature({title, src, description}: FeatureItem) {
  return (
      <div className={clsx('col col--4')}>
        <div className="text--center">
          <img className={styles.featureSvg} src={src} role="img" alt={"#"}/>
        </div>
        <div className="text--center padding-horiz--md">
          <h3>{title}</h3>
          <p>{description}</p>
        </div>
      </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
      <section className={styles.features}>
        <div className="container">
          <div className="row">
            {FeatureList.map((props, idx) => (
                <Feature key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
  );
}
