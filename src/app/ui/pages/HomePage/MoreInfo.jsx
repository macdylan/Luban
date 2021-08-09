import React from 'react';
import classNames from 'classnames';
import i18next from 'i18next';
import i18n from '../../../lib/i18n';
import styles from './styles.styl';

const MoreInfo = () => {
    const lang = i18next.language;
    return (
        <div className={styles['more-info']}>
            <div className={classNames('highlight-heading', 'margin-bottom-16')}>
                {i18n._('Help')}
            </div>
            <div className={classNames(styles['resource-list'])}>
                <a href="javascript;" target="_blank" rel="noopener noreferrer" className={classNames(styles.listItem)}>
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Software Manual
                    </span>
                </a>
                <a className={classNames(styles.listItem, styles['right-part'])} href={lang === 'en' ? 'https://support.snapmaker.com/hc/en-us' : 'https://support.snapmaker.com/hc/zh-cn'} target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Support
                    </span>
                </a>
                <a className={classNames(styles.listItem)} href="https://www.youtube.com/c/Snapmaker/playlists" target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Video Tutorial
                    </span>
                </a>
                <a className={classNames(styles.listItem, styles['right-part'])} href="https://forum.snapmaker.com/" target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Forum
                    </span>
                </a>
                <a className={classNames(styles.listItem)} href={lang === 'en' ? 'https://snapmaker.com' : 'https://snapmaker.cn/'} target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Snapmaker.com
                    </span>
                </a>
                <a className={classNames(styles.listItem, styles['right-part'])} href="https://shop.snapmaker.com/" target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      Shopify
                    </span>
                </a>
                <a className={classNames(styles.listItem)} href="https://www.myminifactory.com/" target="_blank" rel="noopener noreferrer">
                    <span className={classNames('heading-3-normal-with-hover')}>
                      MyMiniFactory
                    </span>
                </a>
            </div>
        </div>
    );
};

export default MoreInfo;
