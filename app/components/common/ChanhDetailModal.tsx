'use client';
import { Col, Modal, Row } from 'antd';
import Update from '../../types/Update';

type Props = {
  data: Update;
};

const ChanhDetailModal = (props: Props) => {
  const generateDetail = () => {
    if (!props.data.detail) return null;
    else {
      let span_detail: any[] = [];
      for (var line of props.data.detail) {
        span_detail.push(
          <span className="chanh-detail-modal__line !px-0">{line}</span>
        );
      }
      return span_detail;
    }
  };

  const generateDetailWithThumbnail = () => {
    return (
      <Row gutter={16} className="mt-2 !mx-0">
        <Col lg={8}>
          <img
            className="chanh-detail-modal__thumbnail"
            referrerPolicy="no-referrer"
            src={props.data.thumbnail_link ?? '#'}
            alt={`Image: ${props.data.title}`}
          />
        </Col>
        <Col lg={16}>{generateDetail()}</Col>
      </Row>
    );
  };

  const showDetail = () => {
    const _date = props.data.date.toString();
    return Modal.info({
      centered: true,
      icon: ' ',
      keyboard: true,
      maskClosable: true,
      closable: true,
      footer: [],
      content: (
        <>
          <i>{`${_date.slice(0, 4)}.${_date.slice(4, 6)}.${_date.slice(6)}`}</i>
          {props.data.thumbnail_link
            ? generateDetailWithThumbnail()
            : generateDetail()}
        </>
      ),
      title: <h2>{props.data.title}</h2>,
      className: 'chanh-detail-modal',
    });
  };

  return (
    <a className="chanh-link" onClick={() => showDetail()}>
      {props.data?.title}
    </a>
  );
};

export default ChanhDetailModal;
