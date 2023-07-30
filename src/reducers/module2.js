import { GET_MODULE2, INDUSTRIAL_HEAT_PUMP, UPDATE_BASELINE, UPDATE_ECONOMIC_PARAMETERS, UPDATE_ENERGY_MANAGEMENT_SYSTEM, UPDATE_LED, UPDATE_PASSIVE_INFRARED_SENSOR, UPDATE_SMART_METERS_ELECTRICITY, UPDATE_SMART_METERS_GAS, UPDATE_SOLAR_PV, UPDATE_SOLAR_THERMAL, UPDATE_VOLTAGE_OPTIMISATION, UPDATE_WIND } from "../actions/types";

const initialState = {
    baseline: {
        averageAnnualElectricityConsumption: "",
        averageAnnualGasConsumption: "",
        emissionFactorGridElectricity: "0.284",
        emissionFactorForGridGas: "0.18",
        annualOperationalEmissionsForGridElectricity: "",
        annualOperationalEmissionsForGridGas: "",
        totalBaselineEmissions: "",
        isComplete: false
    },
    economicParameters: {
        unitPriceOfElectricity: "0.248",
        unitPriceOfGas: "0.0603",
        yearsOfAbatement: "10",
        discountRate: "5",
        isComplete: false
    },
    solarPV: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromPV: "80",
        location: "Coventry",
        latitudeLongitude: "",
        electricityGeneratedPVSystem: "",
        annualElectricityGenerationSelectedLocation: "",
        annualSolarInsolationSelectedLocation: "",
        solarModuleEfficiency: "15",
        gHGEmissionsElectricityPVSystem: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        unitInstallationCostPVSystem: "",
        initialInvestmentPVSystem: "",
        annualElectricityInsteadOfGrid: "",
        sizeOfPVSystem: "",
        areaOfPVSystem: "",
        annualOperationalCostSavings: "",
        netPresentValueOperationalEnergy: "",
        totalOperationalEmissionSavingsAbatementPeriodInTon: "",
        costEffectivenessOperationalEmission: "",
        isComplete: false
    },
    wind: {
        averageAnnualElectricityRequirements: "",
        percentAnnualElectricityFromWind: "15",
        location: "Coventry",
        latitudeLongitude: "",
        height: "80",
        turbineModel: "Gamesa G128 4500",
        averageAnnualWindSpeed: "",
        annualGenerationWindSystem: "",
        inverterEfficiency: "90",
        sizeOfWindSystem: "",
        electricityUsedFromWindSystemInsteadGrid: "",
        unitInstallationCost: "1300",
        initialInvestmentWindSystem: "",
        annualOperationalCost: "",
        netPresentValueOperationalEnergyCostSavings: "",
        annualOperationalEmissionSavings: "",
        totalOperationalEmissionSavingsAbatementPeriod: "",
        totalOperationalEmissionSavingsAbatementPeriodTon: "",
        costEffectivenessConsideringOperationalEmissionSavings: "",
        isComplete: false
    },
    led: {
        currentTypeOfLighting: "Incandescent Bulb",
        currentLightingPowerRating:"60",
        numberOfUnits:"50",
        dailyUsage:"16",
        numberOfOperationalDaysInaYear:"200",
        annualUsage:"",
        lEDPowerRating:"",
        unitCostForLED:"",
        initialInvestmentForLEDs:"",
        costofElectricityWithCurrentLighting:"",
        costOfElectricityWithLEDs:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        annualElectricityConsumptionWithCurrentLighting:"",
        annualElectricityConsumptionWithLEDs:"",
        annualElectricitySavingsWithLEDs:"",
        annualOperationalCostSavings:"",
        netPresentValueOfOperationalEnergyCostSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false
    },
    passiveInfraredSensor: {
        numberOfLamps:"50",
        wattageOfLamp:"60",
        numberOfDaysInYear:"200",
        estimatedHoursONPerDay:"16",
        estimatedHoursOccupiedPerDay:"12",
        areaOfIndustrialFacility:"5000",
        detectionRangeOfPIRSensors:"491",
        numberOfPIRSensors:"",
        annualElectricityConsumptionWithoutPirSensor:"",
        annualElectricityConsumptionWithPirSensorInstalled:"",
        annualElectricitySavingsWithPirSensors:"",
        unitCostOfPirSensor:"140",
        initialInvestmentForPir:"",
        annualOperationalCostSavings:"",
        netPresentValueOfOperationalEnergyCostSaings:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        isComplete: false
    },
    smartMetersElectricity:{
        averageAnnualElectricityConsumption:"",
        averageElectricitySavingsIncentivisedUsingSmartMeter:"2.80",
        annualElectricitySavingsWithSmartMeters:"",
        annualOperationalCostSavings:"",
        initialInvestmentForElectricitySmartMeter:"136.00",
        netPresentValueOfOperationalEnergyCostSavings:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false
    },
    smartMetersGas:{
        averageAnnualGasConsumption:"",
        averageGasSavingsIncentivisedUsingSmartMeter:"4.50",
        annualGasConsumptionWithSmartMeters:"",
        initialInvestmentForGasSmartMeter:"136.00",
        annualOperationalCostSavings:"",
        netPresentValueOfOperationalEnergyCostSavings:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false
    },
    voltageOptimisation:{
        averageAnnualElectricityConsumption:"",
        averageElectricitySavingsUsingVoltageOptimisation:"13",
        annualElectricitySavingsWithVoltageOptimisation:"",
        annualOperationalCostSavings:"",
        initialInvestmentForVoltageOptimisation:"7500",
        netPresentValueOfOperationalEnergyCostSavings:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false
    },
    energyManagementSystem:{
        averageAnnualElectricityConsumption:"",
        averageAnnualGasConsumption:"",
        averageElectricitySavingsIncentivisedUsingBEMS:"12",
        averageGasSavingsIncentivisedUsingBEMS:"9",
        annualElectricitySavingsWithBEMS:"",
        annualGasSavingsWithBEMS:"",
        initialInvestmentForBEMS:"5000",
        annualOperationalElectricityCostSavings:"",
        annualOperationalGasCostSavings:"",
        totalAnnualOperationalCostSavings:"",
        totalOperationalEmissionSavingsAbatementPeriod:"",
        netPresentValueOfOperationalEnergyCostSavings:"",
        gHGEmissionsSavingsForElectricityWithBEMS:"",
        gHGEmissionsSavingsForGasWithBEMS:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false
    },
    solarThermal:{
        averageAnnualGasRequirements:"",
        heatDemandToBeTakenFromSolarThermalSystem:"",
        location:"",
        latitudeLongitude:"",
        existingBoilerEfficiency:"",
        incidentSolarIrradiation:"",
        solarIrradiation:"",
        opticalEfficiency:"",
        firstOrderEfficiencyCoefficient:"",
        secondOrderEfficiencyCoefficient:"",
        ambientTemperature:"",
        inletTemperature:"",
        outletTemperature:"",
        collectorTemperature:"",
        efficiencyOfSolarThermalSystem:"",
        capacityOfSolarThermalSystem:"",
        annualGridGasSavingInPresenceOfSolarThermalSystem:"",
        sizeOfSolarThermalSystem:"",
        unitInstallationCostOfSolarThermalSystem:"",
        initialInvestmentForSolarThermalSystem:"",
        unitPriceOfGridGas:"",
        annualOperationalCostSavings:"",
        netPresentValueOfOperationalEnergyCostSavings:"",
        emissionFactorOfGridGas:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        isComplete: false
    },
    industrialHeatPump:{
        averageAnnualGasRequirements:"",
        heatLoadIsAtTemperaturesBelow100C:"",
        heatLoadIsAtTemperaturesBetween100C150C:"",
        latitudeLongitude:"",
        existingBoilerEfficiency:"",
        hoursOfHeatDemand:"",
        annualHeatLoad:"",
        annualGridGasSavingInPresenceOfIHP1:"",
        heatSourceTemperature:"",
        heatSinkTemperature:"",
        temperatureLift:"",
        refrigerant:"",
        coefficientOfPerformanceOfIHP1:"",
        electricityInput:"",
        annualGridGasSavingInPresenceOfIHP2:"",
        coefficientOfPerformanceOfIHP2:"",
        electricityInputForIHP2:"",
        sizeOfIndustrialHeatPump1:"",
        annualElectricityInputToIHP1:"",
        sizeOfIndustrialHeatPump2:"",
        annualElectricityInputToIHP2:"",
        unitInstallationCostOfIHP:"",
        initialInvestmentForIHP1:"",
        initialInvestmentForIHP2:"",
        unitPriceOfElectricity:"",
        annualCostOfElectricityForIHP1:"",
        annualCostOfElectricityForIHP2:"",
        unitPriceOfGridGas:"",
        annualCostSavingsForGridGas:"",
        annualCostOfElectricityForIHPs:"",
        annualOperationalCostSavings:"",
        netPresentValueOfOperationalEnergyCostSavings:"",
        emissionFactorOfGridGas:"",
        emissionFactorOfElectricityUsedForIHPs:"",
        gHGEmissionsForHeatInAbsenceOfIHP:"",
        gHGEmissionsForHeatInPresenceOfIHP:"",
        annualOperationalEmissionSavings:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriod:"",
        totalOperationalEmissionSavingsAcrossAbatementPeriodTon:"",
        costEffectivenessConsideringOperationalEmissionSavingsOnly:"",
        isComplete: false        
    }

};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_MODULE2:
            return { data: payload };
        case UPDATE_BASELINE:
            return {
                ...state,
                baseline: payload
            }
        case UPDATE_ECONOMIC_PARAMETERS:
            return {
                ...state,
                economicParameters: payload
            }
        case UPDATE_SOLAR_PV:
            return {
                ...state,
                solarPV: payload
            }
        case UPDATE_WIND:
            return {
                ...state,
                wind: payload
            }
        case UPDATE_LED:
            return {
                ...state,
                led: payload
            }
        case UPDATE_PASSIVE_INFRARED_SENSOR:
            return {
                ...state,
                passiveInfraredSensor: payload
            }
        case UPDATE_SMART_METERS_ELECTRICITY:
            return {
                ...state,
                smartMetersElectricity: payload
            }
        case UPDATE_SMART_METERS_GAS:
            return {
                ...state,
                smartMetersGas: payload
            }
        case UPDATE_VOLTAGE_OPTIMISATION:
            return {
                ...state,
                voltageOptimisation: payload
            }
        case UPDATE_ENERGY_MANAGEMENT_SYSTEM:
            return {
                ...state,
                energyManagementSystem: payload
            }
        case UPDATE_SOLAR_THERMAL:
            return {
                ...state,
                solarThermal: payload
            }
        case INDUSTRIAL_HEAT_PUMP:
            return {
                ...state,
                industrialHeatPump: payload
            }
        default:
            return state;
    }
}