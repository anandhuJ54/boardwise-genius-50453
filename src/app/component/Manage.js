import React, { useState, useEffect } from "react";
import { Tree } from "antd";
import { Flex } from "./styles";
import { X } from "react-feather";

const { TreeNode } = Tree;

const Manage = ({ treeData }) => {
  const [manageData, setManageData] = useState([]);
  useEffect(() => {
    setManageData([...treeData]);
  }, [treeData]);
  const handleRemove = () => {};
  const renderTreeNodes = (data) => {
    return data?.map((item) => {
      const isRemove = () => {
        if (!item?.parent && item?.zip_id) return true;
        else if (item?.parent && item?.service_id) return true;
        else return false;
      };
      return (
        <TreeNode
          key={item?.key}
          title={
            <Flex>
              <div>{item?.parent ? item?.service : item?.label}</div>
              {isRemove() && (
                <Flex align="center" style={{ marginLeft: 8 }}>
                  <Flex
                    onClick={() => handleRemove()}
                    style={{ marginLeft: 8 }}
                  >
                    <X size={16} />
                  </Flex>
                </Flex>
              )}
            </Flex>
          }
        >
          {renderTreeNodes(item?.children || [])}
        </TreeNode>
      );
    });
  };
  return (
    <div>
      <h2>Manage Zipcode</h2>
      <Tree
        checkable={false}
        defaultExpandAll
        switcherIcon={<></>}
        showLine={true}
        style={{ width: "100%" }}
        expandedKeys={manageData?.map((val) => val?.key)}
      >
        {renderTreeNodes(manageData)}
      </Tree>
    </div>
  );
};
export default Manage;
