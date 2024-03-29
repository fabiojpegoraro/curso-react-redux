export function selectTab(tabId) {
    return {
        type: 'TAB_SELECTED',
        payload: tabId
    }
}

export function showTabs(...tabIds) {
    const tabsToShow = {};
    tabIds.forEach(element => tabsToShow[element] = true);

    return {
        type: 'TAB_SHOWED',
        payload: tabsToShow
    }
}