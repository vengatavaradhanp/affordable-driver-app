export const CommonService = {
    getRemainingDaysOrMonthsOrYears: (date) => {
        const today = new Date();
        const expiryDate = new Date(date);
        const timeDiff = Math.abs(expiryDate.getTime() - today.getTime());
        const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
        if (diffDays < 30) {
            return `${diffDays} Days`;
        } else if (diffDays < 365) {
            return `${Math.floor(diffDays / 30)} Months`;
        } else {
            return `${Math.floor(diffDays / 365)} Years`;
        }
    }
}