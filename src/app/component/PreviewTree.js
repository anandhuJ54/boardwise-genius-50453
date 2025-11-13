import React, { useEffect, useState } from "react";
import { Tree } from "antd";
import { Flex } from "./styles";

const { TreeNode } = Tree;

const PreviewTree = ({ treeData }) => {
  const [previewData, setPreviewData] = useState([]);

  const getServiceNodes = (item) => {
    const services = item.children?.filter((c) => c?.service_id) || [];
    if (!services.length) return [];
    return [
      {
        key: `${item.key}-0`,
        parent: item.key,
        title: (
          <Flex>
            {services.map((s, idx) => (
              <div
                key={idx}
                style={{
                  margin: "0 8px",
                  border: "1px solid grey",
                  padding: "0 6px",
                  borderRadius: "3px",
                }}
              >
                <span>{s.service}</span>
              </div>
            ))}
          </Flex>
        ),
      },
    ];
  };

  useEffect(() => {
    if (!Array.isArray(treeData)) return;
    const filtered = treeData.map((item) => ({
      ...item,
      children: getServiceNodes(item),
    }));
    setPreviewData(filtered);
  }, [treeData]);

  const renderTreeNodes = (data) =>
    data.map((item) =>
      !item.parent ? (
        <TreeNode
          key={item.key}
          title={
            <Flex>
              <div>{item.label}</div>
              {item.zip && (
                <Flex align="center" style={{ marginLeft: 8 }}>
                  <span>-----------</span>
                  <span>$69</span>
                </Flex>
              )}
            </Flex>
          }
        >
          {renderTreeNodes(item.children || [])}
        </TreeNode>
      ) : (
        <TreeNode key={item.key} title={item.title} />
      )
    );

  return (
    <div style={{ padding: 0 }}>
      <h2>Preview Zipcodes</h2>
      <Tree
        checkable={false}
        defaultExpandAll
        switcherIcon={<></>}
        showLine
        style={{ width: "100%" }}
        expandedKeys={previewData.map((val) => val.key)}
      >
        {renderTreeNodes(previewData)}
      </Tree>
    </div>
  );
};

export default PreviewTree;
