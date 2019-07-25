import React from "react";
import { Menu } from "element-react";

import TopicService from "../../../../../services/Topic";

const renderMenu = topics => {
  const menu = topics.map(topic => {
    let item;

    if (!topic.children) {
      item = (
        <Menu.Item index={topic.id.toString()} key={topic.id}>
          <i className={topic.icon} />
          {topic.title}
        </Menu.Item>
      );
    } else {
      item = (
        <Menu.SubMenu
          key={topic.id}
          index={topic.id.toString()}
          title={
            <span>
              <i className={topic.icon} />
              {topic.title}
            </span>
          }
        >
          {renderMenu(topic.children)}
        </Menu.SubMenu>
      );
    }

    return item;
  });

  return menu;
};

export default () => {
  const topics = TopicService.list();

  return renderMenu(topics.data);
};
