import React from "react";
import "./style.scss";
import { Menu, Input } from "element-react";

import TopicService from "../../../../services/Topic";

import renderTopicsMenu from "./methods/renderTopicsMenu";

export default class Side extends React.Component {
  render() {
    return (
      <Menu defaultActive="2" className="Side">
        <label className="title">Nome Sistema</label>
        <Input
          icon="search"
          placeholder="Search"
          onIconClick={this.handleIconClick.bind(this)}
        />
        {renderTopicsMenu()}
      </Menu>
    );
  }

  handleIconClick() {
    alert("Clicked");
  }
}

/* <Menu.SubMenu
          index="1"
          title={
            <span>
              <i className="el-icon-message" />
              Navigator One
            </span>
          }
        >
          <Menu.ItemGroup title="Group One">
            <Menu.Item index="1-1">Option 1</Menu.Item>
            <Menu.Item index="1-2">Option 2</Menu.Item>
          </Menu.ItemGroup>
          <Menu.ItemGroup title="Group Two">
            <Menu.Item index="1-3">Option 3</Menu.Item>
          </Menu.ItemGroup>
        </Menu.SubMenu>
        <Menu.Item index="2">
          <i className="el-icon-menu" />
          Navigator Two
        </Menu.Item>
        <Menu.Item index="3">
          <i className="el-icon-setting" />
          Navigator Three
        </Menu.Item> */
