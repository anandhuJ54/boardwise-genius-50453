export const addZipcode = ({ treeData, setTreeData }) => {
  const newIndex = treeData?.length || 0;
  const newZipcode = {
    key: `${newIndex}`,
    title: `${newIndex}`,
    children: [], // add empty children array for consistency
    isAdd: true, // optional: mark this as a newly added node
  };

  setTreeData([...treeData, newZipcode]);
};

export const removeZipcode = ({ item, treeData, setTreeData }) => {
  const updatedTree = treeData
    ?.filter((node) => node?.key !== item?.key)
    ?.map((node, parentIdx) => {
      const newKey = `${parentIdx}`;
      return {
        ...node,
        key: newKey,
        title: newKey,
        children:
          node?.children?.map((child, childIdx) => {
            const childKey = `${newKey}-${childIdx}`;
            return {
              ...child,
              key: childKey,
              title: childKey,
              parent: newKey,
            };
          }) || [],
      };
    });

  setTreeData(updatedTree);
};

export const addService = ({ item, treeData, setTreeData }) => {
  const parentKey = item?.parent;
  const itemKey = item?.key;
  setTreeData(
    treeData.map((node) => {
      if (node?.key !== parentKey) return node;

      return {
        ...node,
        children:
          node?.children?.map((child) =>
            child?.key === itemKey ? { ...child, isAdd: false } : child
          ) || [],
      };
    })
  );
};

export const removeService = ({ item, treeData, setTreeData }) => {
  const parentKey = item?.parent;

  const parentNode = treeData?.find((node) => node?.key === parentKey);
  const totalServices = parentNode?.children?.length || 0;

  setTreeData(
    treeData.map((node) => {
      if (node?.key !== parentKey) return node;

      const children = node?.children || [];

      if (totalServices > 1) {
        const filteredChildren = children
          .filter((child) => child?.service_id !== item?.service_id)
          .map((child, idx) => ({
            ...child,
            key: `${parentKey}-${idx}`,
            title: `${parentKey}-${idx}`,
          }));

        return {
          ...node,
          children: filteredChildren,
        };
      } else {
        const updatedChildren = children.map((child) => {
          if (child?.key === item?.key) {
            return {
              ...child,
              isAdd: true,
              service_id: "",
              service: "",
            };
          }
          return child;
        });

        return {
          ...node,
          children: updatedChildren,
        };
      }
    })
  );
};

export const handleChange = ({
  value,
  item,
  ZIPCODE_LIST,
  treeData,
  setTreeData,
}) => {
  const selectedZip = ZIPCODE_LIST?.find((e) => e?.zip_id === value);
  const isChild = !!item?.parent;

  if (isChild) {
    const parentKey = item.parent;

    const parentNode = treeData?.find((node) => node?.key === parentKey);
    const existingChild = parentNode?.children?.find(
      (c) => c?.key === item?.key
    );

    const selectedService = ZIPCODE_LIST?.find(
      (z) => z.zip_id === item?.zip_id
    )?.children?.find((s) => s?.id === value);

    const newChildKey = `${parentKey}-${parentNode?.children?.length || 0}`;
    const alreadyHasService = !!existingChild?.service_id;

    setTreeData(
      treeData.map((node) => {
        if (node.key !== parentKey) return node;

        const updatedChildren =
          node.children?.map((child) =>
            child.key === item.key
              ? {
                  ...child,
                  service_id: selectedService?.id,
                  service: selectedService?.name,
                }
              : child
          ) || [];

        if (!alreadyHasService) {
          updatedChildren.push({
            title: newChildKey,
            key: newChildKey,
            isLeaf: true,
            parent: parentKey,
            isAdd: true,
            zip_id: item.zip_id,
            service_id: "",
            service: "",
          });
        }

        return {
          ...node,
          children: updatedChildren,
        };
      })
    );
  } else {
    const newChildKey = `${item.key}-0`;

    const newChild = {
      title: newChildKey,
      key: newChildKey,
      isLeaf: true,
      parent: item.key,
      isAdd: true,
      zip_id: selectedZip?.zip_id,
      service_id: "",
      service: "",
      isFirstServiceCard: true,
    };

    setTreeData(
      treeData.map((node) =>
        node.key === item.key
          ? {
              ...node,
              ...selectedZip,
              children: [newChild],
            }
          : node
      )
    );
  }
};
