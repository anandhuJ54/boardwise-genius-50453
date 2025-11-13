"use client";
import React, { useEffect, useState } from "react";
import { Tree, Select, Button } from "antd";
import { X } from "react-feather";

import { Flex } from "./styles";
import { INIT_VALUES, ZIPCODE_LIST } from "./constants";
import PreviewTree from "./PreviewTree";
import Manage from "./Manage";

import {
  addZipcode,
  removeZipcode,
  addService,
  removeService,
  handleChange,
} from "./partials/Common";

const { TreeNode } = Tree;

function TreeView() {
  const [treeData, setTreeData] = useState(INIT_VALUES || []);
  useEffect(() => {
    console.log(treeData);
  }, [treeData]);
  const renderTreeNodes = (data) => {
    return data?.map((item) => {
      const isChild = !!item?.parent;
      const isAdd = item?.isAdd;
      const hasZip = !!item?.zip_id;
      const hasService = !!item?.service_id;
      // --- Child node: "Add Service" placeholder ---
      if (isChild && isAdd) {
        if (
          item?.parent == 0 &&
          item?.key?.split("-")?.[1] == 0 &&
          item?.isFirstServiceCard
        ) {
          return (
            <TreeNode
              key={item?.key}
              title={
                <div>
                  <Flex>
                    <Button
                      onClick={() => {
                        setTreeData(
                          treeData?.map((node) => {
                            if (node?.key !== item?.parent) return node;

                            return {
                              ...node,
                              children:
                                node.children?.map((child) =>
                                  child?.key === item?.key
                                    ? { ...child, isFirstServiceCard: false }
                                    : child
                                ) || [],
                            };
                          })
                        );
                      }}
                    >
                      Later
                    </Button>
                    <Button
                      onClick={() =>
                        addService({ item, treeData, setTreeData })
                      }
                    >
                      Select Service Now
                    </Button>
                  </Flex>
                </div>
              }
            />
          );
        } else {
          return (
            <TreeNode
              key={item?.key}
              title={
                <div
                  onClick={() => addService({ item, treeData, setTreeData })}
                >
                  Select Service
                </div>
              }
            />
          );
        }
      }
      // --- Child node: Service selection ---
      if (isChild && !isAdd) {
        const zipServices =
          ZIPCODE_LIST?.find((e) => e?.zip_id === item?.zip_id)?.children || [];

        const parent = treeData.find((e) => e?.key === item?.parent);
        const chosenServices =
          parent?.children?.filter((child) => !!child?.service_id) || [];

        const zipServiceIds = zipServices.map((s) => s?.id);
        const chosenServiceIds = chosenServices.map((s) => s?.service_id);

        const unmatchedServices = [
          ...zipServices.filter((s) => !chosenServiceIds.includes(s?.id)),
          ...chosenServices.filter(
            (s) => !zipServiceIds.includes(s?.service_id)
          ),
        ];
        return (
          <TreeNode
            key={item.key}
            title={
              <Flex>
                <Select
                  placeholder="Select Service"
                  options={unmatchedServices}
                  onChange={(value) =>
                    handleChange({
                      value,
                      item,
                      treeData,
                      setTreeData,
                      ZIPCODE_LIST,
                    })
                  }
                  value={item?.value}
                  style={{ width: 220 }}
                />
                {hasService && (
                  <Flex align="center" style={{ marginLeft: 8 }}>
                    <span>-------- $9</span>
                    <Flex
                      onClick={() =>
                        removeService({ item, treeData, setTreeData })
                      }
                      style={{ marginLeft: 8 }}
                    >
                      <X size={16} />
                    </Flex>
                  </Flex>
                )}
              </Flex>
            }
          />
        );
      }
      // --- Root node: Zip code selection ---
      const allZipCodes = ZIPCODE_LIST || [];
      const selectedZipIds =
        treeData?.map((z) => z?.zip_id).filter(Boolean) || [];
      const unmatchedZipcodes = [
        ...allZipCodes.filter((z) => !selectedZipIds.includes(z?.zip_id)),
        // Add current item's zip_id back in, so its selected value stays visible
        ...allZipCodes.filter((z) => z?.zip_id === item?.zip_id),
      ];
      return (
        <TreeNode
          key={item.key}
          title={
            <Flex>
              <Select
                placeholder="Select Zip code"
                options={unmatchedZipcodes}
                onChange={(value) =>
                  handleChange({
                    value,
                    item,
                    treeData,
                    setTreeData,
                    ZIPCODE_LIST,
                  })
                }
                value={item?.value}
                style={{ width: 240 }}
              />
              {hasZip && (
                <Flex align="center" style={{ marginLeft: 8 }}>
                  <span>-------- $69</span>
                  <Flex
                    onClick={() =>
                      removeZipcode({ item, treeData, setTreeData })
                    }
                    style={{ marginLeft: 8 }}
                  >
                    <X size={16} />
                  </Flex>
                </Flex>
              )}
            </Flex>
          }
        >
          {renderTreeNodes(item?.children)}
        </TreeNode>
      );
    });
  };
  return (
    <div style={{ padding: 24 }}>
      <h2>Buy Zipcode/Services</h2>
      <Tree
        checkable={false}
        defaultExpandAll
        switcherIcon={<></>}
        showLine={true}
        style={{ width: "100%" }}
        expandedKeys={treeData?.map((val) => val?.key)}
      >
        {renderTreeNodes(treeData)}
      </Tree>
      <br />
      <br />
      <Button onClick={() => addZipcode({ treeData, setTreeData })}>
        Add Zipcode
      </Button>
      <br />
      <br />
      <Manage treeData={treeData} />
      <PreviewTree treeData={treeData} />
    </div>
  );
}

export default TreeView;
