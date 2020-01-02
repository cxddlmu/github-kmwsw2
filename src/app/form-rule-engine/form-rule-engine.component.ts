// import { AbstractControl, FormGroup, FormArray, FormControl, Validators } from "@angular/forms";

// import * as _ from 'lodash'
// import { Injectable } from "@angular/core";
// import { Engine, Rule } from "json-rules-engine";
// import format from "string-format";
// import { takeUntil, filter } from "rxjs/operators";
// import { Subject, forkJoin } from "rxjs";


// export const MATCH_ANY_OTHER = '_ANY_OTHER_'
// export const IS_CROSS_COMPONENT = 'IS_CROSS_COMPONENT'
// export const CALLBACK = '_CALLBACK_'
// export const IS_ARRAY = 'IS_ARRAY'
// /**
//   * iterate form and handle the formcontrol by callback function
//   * @param ctrl 
//   * @param ctrlVal 
//   * @param callback 
//   *    * formgroup---ctrlKey(type:primitive,array)
//   *          |--ctrlKey--formArray--formgroup---ctrlKey(type:primitive,array,json)
//   *          |--ctrlKey--formgroup--ctrlKey
//   * 
//   * change callback into subject
//   */
// export enum RuleType {
//     STATIC_VALUE = 'STATIC_VALUE',
//     DYNAMIC_VALUE = 'DYNAMIC_VALUE',
//     IS_DISABLED = 'IS_DISABLED',
//     CVT_VALUE = 'CVT_VALUE',
//     IS_REQUIRED = 'IS_REQUIRED',
//     EXTENSION = 'EXTENSION',
// }


// export type Record<K extends keyof any, T> = {
//     [P in K]: T;
// };
// interface ResultRuleConfig {
//     ruleType: RuleType;
//     ruleValue: string;
//     formControlName: string;
//     crossComponentName?: string;
//     arrayName?: string;
//     callback?: Function;
//     rangeValue: string;
// }
// interface GeneralParamType {
//     sourceComponentName?: string;
//     sourceFormControlName?: string;
//     sourceFormControlValue?: string;
//     targetFormControlName?: string;
//     targetFormControlValue?: string;
//     formgroup?: FormGroup;
//     fixedValue?: string;
//     rangeValue?: {};
//     resultRuleConfig?: ResultRuleConfig;
// }
// @Injectable({
//     providedIn: 'root'
// })
// export class FormRuleEngineComponent{

//   constructor() { }

//   // ngOnInit() {
//   // }
//   engineMapByComponent = {};

//     // constructor() {


//     // }
//     private parseStaticValue(generalParam: GeneralParamType) {
//         const targetFormControlName = generalParam?.resultRuleConfig?.formControlName;
//         const fixedValue = generalParam?.resultRuleConfig?.ruleValue;
//         const rangeValue = generalParam?.resultRuleConfig?.rangeValue;
//         // let rangeValue = params[targetFormControlName]?.staticValue['rangeValue'];
//         generalParam = this.refreshGeneralParam(generalParam, { targetFormControlName, fixedValue, rangeValue });
//         if (fixedValue) {
//             this.handleFixedValue(generalParam)
//         }
//         else if (rangeValue) {
//             this.handleRangeValue(generalParam)
//         } else {
//             return;
//         }
//     }
//     private parseDynamicValue(generalParam: GeneralParamType) {
//         const targetFormControlName = generalParam?.resultRuleConfig?.formControlName;
//         const formgroup = generalParam?.formgroup;
//         formgroup.get(targetFormControlName).patchValue(format(generalParam.resultRuleConfig[targetFormControlName].dynamicValue[MATCH_ANY_OTHER], formgroup.getRawValue()))
//     }
//     private parseIsDisabled(generalParam: GeneralParamType) {
//         const formgroup = generalParam?.formgroup;
//         const targetFormControlName = generalParam?.resultRuleConfig?.formControlName;
//         const sourceFormControlValue = generalParam?.sourceFormControlValue;
//         const ruleValue = generalParam?.resultRuleConfig?.ruleValue
        
//         let targetFormControlValue = params[targetFormControlName].isDisabled[sourceFormControlValue];
//         if (!targetFormControlValue) {
//             targetFormControlValue = params[targetFormControlName].isDisabled[MATCH_ANY_OTHER];
//         }
//         if (params[targetFormControlName][IS_CROSS_COMPONENT]) {
//             this.triggerValueChangeToOtherComponentForRuleConfigMode(sourceComponentName, sourceFormControlName, targetFormControlName, targetFormControlValue);
//         } else {
//             if (targetFormControlValue) {
//                 formgroup.get(targetFormControlName).disable();
//             } else {
//                 formgroup.get(targetFormControlName).enable();
//             }
//         }
//     }
//     private 
//     private parseCVTValue() {

//     }
//     private parseIsRequired() {

//     }
//     ruleTypeParserMap = {
//         [RuleType.STATIC_VALUE]: this.parseStaticValue,
//         [RuleType.DYNAMIC_VALUE]: this.parseDynamicValue,
//         [RuleType.IS_DISABLED]: this.parseIsDisabled,
//         [RuleType.CVT_VALUE]: this.parseCVTValue,
//         [RuleType.IS_REQUIRED]: this.parseIsRequired,
//     }
//     countryCode = 'SG'//through service acquire value
//     applicantRole = "AH"//through service 
//     public iterateForm(formCtrl: AbstractControl, formCtrlKey = null, formCtrlVal: any, triggeredPath: Array<any>, callbackList?: Function[]) {
//         if (formCtrl instanceof FormGroup) {
//             if (_.isEmpty(formCtrlVal)) {
//                 formCtrlVal = {};
//             }

//             for (let formCtrlKey in formCtrl.controls) {
//                 triggeredPath.push(formCtrlKey);
//                 this.iterateForm(formCtrl.get(formCtrlKey), formCtrlKey, formCtrlVal[formCtrlKey], triggeredPath, callbackList);
//             }
//         } else if (formCtrl instanceof FormArray) {
//             let index: number = 0;
//             let formArrayCtrl: FormArray = formCtrl;
//             if (Array.isArray(formCtrlVal) && formCtrlVal.length > 0) {
//                 for (let ctrl of formCtrlVal) {
//                     triggeredPath.push(index);
//                     let formArrayCtrlCnt = formArrayCtrl.controls.length - 1;
//                     if (formArrayCtrlCnt < index) {
//                         formArrayCtrl.push(new FormGroup(formArrayCtrl.at(0).value));//form init value
//                     }
//                     this.iterateForm(formArrayCtrl.at(index), null, ctrl, triggeredPath, callbackList);
//                     index++;
//                 }
//             } else {
//                 for (let ctrl of formArrayCtrl.controls) {
//                     triggeredPath.push(index);
//                     this.iterateForm(formArrayCtrl.at(index), null, ctrl, triggeredPath, callbackList);
//                     index++;
//                 }
//             }
//         } else {
//             for (let callback of callbackList) {
//                 if (_.isFunction(callback)) {
//                     callback(formCtrl, formCtrlKey, formCtrlVal, triggeredPath);
//                 }
//             }
//         }
//     }


//     public isFormGroup(abstractControl: any): abstractControl is FormGroup {
//         return abstractControl;
//     }
//     public calErrorCnt(formGroup: FormGroup) {
//         let errorCnt = 0;
//         let callbackList = [];
//         let callback = (formCtrl: FormControl, formCtrlKey, formCtrlVal, triggeredFormCtrlKeyPaths) => {
//             // let [triggeredFormCtrlKeyPath, indexVals] = this.formatOriginalFormCtrlKeyPath(triggeredFormCtrlKeyPaths);
//             // this.debug(formCtrlKey + "---" + formCtrl.valid);
//             if (!formCtrl.valid && formCtrl.errors) {
//                 errorCnt++;
//                 console.debug(formCtrl);
//             }
//             // formCtrl.valid ? errorCnt : errorCnt++;
//             // if (this.formConfig && this.formConfig[triggeredFormCtrlKeyPath]) {
//             //     this.formConfig[triggeredFormCtrlKeyPath]['hasError'] = !formCtrl.valid;
//             // }
//         };
//         callbackList.push(callback);
//         for (let formCtrlKey in formGroup.controls) {
//             this.iterateForm(formGroup.get(formCtrlKey), formCtrlKey, null, [formCtrlKey], callbackList);
//         }
//         return errorCnt;
//     }


//     private filterRuleConfig(ruleConfig, sourceFormControlName) {
//         let sourceFormControlNameRuleConfig = ruleConfig[sourceFormControlName];
//         if (!sourceFormControlNameRuleConfig) {
//             sourceFormControlNameRuleConfig = ruleConfig[this.countryCode] && ruleConfig[this.countryCode][sourceFormControlName];
//             if (!sourceFormControlNameRuleConfig) {
//                 sourceFormControlNameRuleConfig = ruleConfig[this.countryCode] && ruleConfig[this.countryCode][this.applicantRole] && ruleConfig[this.countryCode][this.applicantRole][sourceFormControlName];
//                 if (!sourceFormControlNameRuleConfig) {
//                     return;
//                 }
//             }
//         }
//         return sourceFormControlNameRuleConfig;
//     }


//     private execRuleCondition(sourceFormControlName, formgroup: FormGroup, ruleConfig: any, controlsConfig, componentName) {
//         const sourceFormControlNameRuleConfig = ruleConfig[sourceFormControlName];
//         if (!ruleConfig) {
//             return;
//         }
//         if (!this.engineMapByComponent[componentName]) {
//             this.engineMapByComponent[componentName] = new Engine();
//             // define a rule for detecting the player has exceeded foul limits.  Foul out any player who:
//             // (has committed 5 fouls AND game is 40 minutes) OR (has committed 6 fouls AND game is 48 minutes)
//         }
//         const engine = this.engineMapByComponent[componentName]
//         //the reason why i implement it like this , synchronize it 
//         //create more engine we can asynchronize,
//         let startEngine = (sourceFormControlNameRuleConfig) => {
//             return new Promise(resolve => {
//                 let rule = new Rule(sourceFormControlNameRuleConfig);
//                 engine.addRule(rule)
//                 /**
//                  * Define facts the engine will use to evaluate the conditions above.
//                  * Facts may also be loaded asynchronously at runtime; see the advanced example below
//                  */
//                 // let facts = {
//                 //     personalFoulCount: 6,
//                 //     gameDuration: 40
//                 // }
//                 // Run the engine to evaluate
//                 engine.run({ ...formgroup.getRawValue(), countryCode: this.countryCode, applicantRole: this.applicantRole })
//                     .then(results => {
//                         // 'results' is an object containing successful events, and an Almanac instance containing facts
//                         // let data = results.almanac['factMap'].get(formControlKey)//
//                         let sourceFormControlValue = formgroup.getRawValue()[sourceFormControlName]
//                         results.events.map(event => {
//                             Object.keys(event.params).forEach(targetFormControlName => {
//                                 this.renderRuleResult(event.params, formgroup, targetFormControlName, sourceFormControlName, sourceFormControlValue, controlsConfig, componentName);
//                             })
//                         })
//                         engine.removeRule(rule);
//                         resolve();
//                     })
//             })
//         }
//         //one field can config multi rule object
//         let engineReadyList = [];
//         if (Array.isArray(sourceFormControlNameRuleConfig) && sourceFormControlNameRuleConfig.length > 0) {
//             for (let ruleConfigItem of sourceFormControlNameRuleConfig) {
//                 engineReadyList.push(startEngine(ruleConfigItem))
//             }
//             return forkJoin(engineReadyList).toPromise();
//         } else {
//             return startEngine(sourceFormControlNameRuleConfig);
//         }
//         //multi condition contain many field check , how to check 
//         // return startEngine(sourceFormControlName, sourceFormControlNameRuleConfig);
//     }
//     private patchOrTriggerValue(generalParam: GeneralParamType) {
//         if (this.isCrossComponent(generalParam?.resultRuleConfig)) {
//             this.triggerValueChangeToOtherComponentForRuleConfigMode(generalParam);
//         } else {
//             generalParam?.formgroup?.get(generalParam?.targetFormControlName)?.patchValue(generalParam?.targetFormControlValue);
//         }
//     }

//     private renderRuleResult(resultRuleConfigs: ResultRuleConfig[], formgroup: FormGroup, targetFormControlName, sourceFormControlName, sourceFormControlValue, controlsConfig, sourceComponentName) {
//         if (!resultRuleConfigs) {
//             return;
//         }
//         for (let resultRuleConfig of resultRuleConfigs) {
//             this.ruleTypeParserMap[resultRuleConfig.ruleType]({ formgroup, resultRuleConfig, sourceFormControlValue, sourceFormControlName, targetFormControlName, sourceComponentName });
//             //e.g. this.parseStaticValue({ resultRuleConfig, sourceFormControlValue });
//         }

//         if (typeof params[targetFormControlName] == 'function') {
//             params[targetFormControlName](formgroup)
//         }
//         else if (params[targetFormControlName].dynamicValue) {
//             formgroup.get(targetFormControlName).patchValue(format(params[targetFormControlName].dynamicValue[MATCH_ANY_OTHER], formgroup.getRawValue()))
//         } else if (params[targetFormControlName].isDisabled) {
//             // let targetFormControlValue = params[targetFormControlName].isDisabled[sourceFormControlValue];
//             // if (!targetFormControlValue) {
//             //     targetFormControlValue = params[targetFormControlName].isDisabled[MATCH_ANY_OTHER];
//             // }
//             // if (params[targetFormControlName][IS_CROSS_COMPONENT]) {
//             //     this.triggerValueChangeToOtherComponentForRuleConfigMode(sourceComponentName, sourceFormControlName, targetFormControlName, targetFormControlValue);
//             // } else {
//             //     if (targetFormControlValue) {
//             //         formgroup.get(targetFormControlName).disable();
//             //     } else {
//             //         formgroup.get(targetFormControlName).enable();
//             //     }
//             // }
//         }

//         else if (params[targetFormControlName].staticValue) {


//             let fixedValue = params[targetFormControlName]?.staticValue['value'];
//             let rangeValue = params[targetFormControlName]?.staticValue['range'];
//             if (fixedValue) {
//                 this.handleFixedValue(sourceComponentName, sourceFormControlName, targetFormControlName, sourceFormControlValue, formgroup, params, fixedValue)
//             }
//             else if (rangeValue) {
//                 this.handleRangeValue(sourceComponentName, sourceFormControlName, targetFormControlName, sourceFormControlValue, formgroup, params, rangeValue)
//             }

//         } else if (params[targetFormControlName].cvtValue) {
//             let item = params[targetFormControlName].cvtValue[MATCH_ANY_OTHER].find(val => val.key == sourceFormControlValue)
//             if (item) {
//                 formgroup.get(targetFormControlName).patchValue(item.name)
//             }

//             // } else if (params[targetFormControlName].display) {
//             //     let targetIsDisplay = params[targetFormControlName]?.display[sourceFormControlValue];
//             //     if (typeof targetIsDisplay !== 'boolean') {
//             //         targetIsDisplay = params[targetFormControlName]?.display[MATCH_ANY_OTHER];
//             //     }
//             // }

//         } else if (params[targetFormControlName].required) {
//             let targetIsRequired = params[targetFormControlName]?.required[sourceFormControlValue];
//             if (typeof targetIsRequired !== 'boolean') {
//                 targetIsRequired = params[targetFormControlName]?.required[MATCH_ANY_OTHER];
//             }
//             //record error
//             (formgroup.get(params[targetFormControlName].arrayName) as FormArray).controls.forEach((targetFormControlNameSub, index) => {
//                 let config = controlsConfig[params[targetFormControlName].arrayName][targetFormControlName];
//                 const formControl = (formgroup.get(params[targetFormControlName].arrayName) as FormArray).at(index).get(targetFormControlName);
//                 if (targetIsRequired) {
//                     formControl.setValidators([Validators.required]);
//                     if (!config[1]) {
//                         config[1] = [Validators.required];
//                     } else {
//                         (config[1] as Array<any>).push(Validators.required);
//                     }
//                     if (formControl.dirty) {
//                         formControl.updateValueAndValidity();
//                     }
//                 } else {
//                     formControl.clearValidators();
//                     if (!config[1]) {
//                         config[1] = [];
//                     } else {
//                         config[1] = (config[1] as Array<any>).filter(val => val !== Validators.required);
//                     }
//                     // config[1] = (config[1] as Array<any>).filter(val => val !== Validators.required);
//                 }
//                 formControl.updateValueAndValidity({ onlySelf: true, emitEvent: false });
//                 // console.log((formgroup.get(params[targetFormControlName].arrayName) as FormArray).at(index).get(targetFormControlName)?.validator({} as AbstractControl)?.required);

//             })

//         } else if (params[targetFormControlName].arrayName) {
//             this.renderRuleResult(event, formgroup, targetFormControlName, sourceFormControlName, sourceFormControlValue, controlsConfig, sourceComponentName);
//         }
//     }
//     private handleFixedValue(generalParam: GeneralParamType) {
//         let targetFormControlValue = generalParam.fixedValue[generalParam.sourceFormControlValue];
//         if (!targetFormControlValue) {
//             targetFormControlValue = generalParam.fixedValue[MATCH_ANY_OTHER];
//         }
//         generalParam = this.refreshGeneralParam(generalParam, { targetFormControlValue })
//         this.patchOrTriggerValue(generalParam)
//     }
//     private isCrossComponent(resultRuleConfig: ResultRuleConfig) {
//         return !!resultRuleConfig.crossComponentName;
//     }
//     private handleRangeValue(generalParam: GeneralParamType) {
//         let rangeValue = generalParam?.rangeValue;
//         const sourceFormControlValue = generalParam?.sourceFormControlValue;
//         for (let rangeValueKey in rangeValue) {
//             let rangeArray = rangeValueKey?.split(',')?.length;
//             if (rangeArray == 2) {
//                 let start = rangeArray[0]
//                 let end = rangeArray[1];
//                 let targetFormControlValue = "";
//                 if (sourceFormControlValue >= start && sourceFormControlValue < end) {
//                     targetFormControlValue = rangeValue[rangeValueKey]
//                 } else if (rangeValue[MATCH_ANY_OTHER]) {
//                     targetFormControlValue = rangeValue[MATCH_ANY_OTHER];
//                 } else {
//                     break;
//                 }
//                 generalParam = this.refreshGeneralParam(generalParam, { targetFormControlValue })
//                 this.patchOrTriggerValue(generalParam)
//             }
//         }
//         // Object.keys(rangeValue).forEach(sourceFormControlRangeValue => {
//         //     let rangeArray = sourceFormControlRangeValue?.split(',')?.length;
//         //     if (rangeArray == 2) {
//         //         let start = rangeArray[0]
//         //         let end = rangeArray[1];
//         //         let targetFormControlValue = "";
//         //         if (sourceFormControlValue >= start && sourceFormControlValue < end) {
//         //             targetFormControlValue = rangeValue[sourceFormControlRangeValue]
//         //         } else if (rangeValue[MATCH_ANY_OTHER]) {
//         //             targetFormControlValue = rangeValue[MATCH_ANY_OTHER];
//         //         } else {

//         //         }
//         //         generalParam = this.refreshGeneralParam(generalParam, { targetFormControlValue })
//         //         this.patchOrTriggerValue(generalParam)
//         //     }
//         // })
//     }
//     private refreshGeneralParam(generalParam: GeneralParamType, newParam: {}) {
//         return { ...generalParam, ...newParam }
//     }
//     //     engine
//     //         .run({ [formControlKey]: (this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex).get(formControlKey).value })
//     //         .then(results => {
//     //             // let data = results.almanac['factMap'].get(formControlKey)
//     //             let originalFormControlValue = (this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex).get(formControlKey).value
//     //             results.events.map(event => {
//     //                 Object.keys(event.params).forEach(targetFormControlName => {
//     //                     if (event.params[targetFormControlName].dynamicValue) {
//     //                         (this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex).get(targetFormControlName).patchValue(format(event.params[targetFormControlName].dynamicValue[this.matchAllToken], ((this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex) as FormGroup).getRawValue()))
//     //                     } else if (event.params[targetFormControlName].staticValue) {
//     //                         let targetFormControlValue = event.params[targetFormControlName].staticValue[originalFormControlValue];
//     //                         if (!targetFormControlValue) {
//     //                             targetFormControlValue = event.params[targetFormControlName].staticValue[this.matchAllToken];
//     //                         }
//     //                         (this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex).get(targetFormControlName).patchValue(targetFormControlValue);

//     //                     } else if (event.params[targetFormControlName].cvtValue) {
//     //                         let item = event.params[targetFormControlName].cvtValue[this.matchAllToken].find(val => val.key == originalFormControlValue)
//     //                         if (item) {
//     //                             (this.identificationForm.get('identificationArray') as FormArray).at(formControlKeyIndex).get(targetFormControlName).patchValue(item.name)
//     //                         }
//     //                     }
//     //                 })

//     //             })
//     //             // 'results' is an object containing successful events, and an Almanac instance containing facts
//     //             // results.events.map(event => console.log(event.params.message))
//     //         })
//     // }
//     public refreshFormValueChangeListener(formArray: FormArray, ruleConfig, formArrayName: string, controlsConfig, componentName) {
//         let subject$ = this.formArrayNameMap.get(formArrayName)
//         if (subject$) {
//             subject$.next();
//         }

//         this.iterateFormArray(formArray, formArrayName, ruleConfig, controlsConfig, componentName)

//         // this.initFormValueChangeListener(formGroup, ruleConfig);
//     }
//     formArrayNameMap = new Map();
//     private iterateFormGroup(formGroup: FormGroup, ruleConfig, controlsConfig, componentName) {
//         Object.keys(formGroup.controls).forEach(formControlKey => {
//             const abstractControl: AbstractControl = formGroup.get(formControlKey);
//             if (abstractControl instanceof FormArray) {
//                 this.iterateFormArray(abstractControl, formControlKey, ruleConfig, controlsConfig, componentName)
//             } else if (abstractControl instanceof FormControl) {
//                 const formControl = (abstractControl as FormControl);
//                 const subject = new Subject()
//                 this.listenValueChange(formControl, formControlKey, formGroup, ruleConfig, subject, controlsConfig, componentName);
//                 // formControl.valueChanges.subscribe((val) => {
//                 //     this.execRule(formControlKey, formGroup, ruleConfig, controlsConfig);
//                 // })
//             }
//         })
//     }

//     private iterateFormArray(formArray: FormArray, formArrayControlKey: string, ruleConfig: {}, controlsConfig, componentName) {
//         // const formArray = (abstractControl as FormArray);
//         const subject = new Subject()
//         this.formArrayNameMap.set(formArrayControlKey, subject);
//         Object.keys(formArray.controls).forEach(formControlKeyIndex => {
//             const formGroupSub: FormGroup = formArray.at(Number(formControlKeyIndex)) as FormGroup;
//             if (formGroupSub instanceof FormGroup) {
//                 Object.keys(formGroupSub.controls).forEach(formControlKeySub => {
//                     const abstractControl: AbstractControl = formGroupSub.get(formControlKeySub);
//                     this.listenValueChange(abstractControl, formControlKeySub, formArray.at(Number(formControlKeyIndex)), ruleConfig, subject, controlsConfig, componentName);
//                 })
//             }
//         })

//     }
//     private listenValueChange(formControl, formControlKey, formGroup, ruleConfig, subject, controlsConfig, componentName) {
//         formControl.valueChanges.pipe(takeUntil(subject)).subscribe(() => {
//             this.execRuleCondition(formControlKey, formGroup, ruleConfig, controlsConfig, componentName);
//         })
//     }
//     // listenNotArrayValueChange(formControl, formControlKey, formGroup, ruleConfig, controlsConfig, componentName) {
//     //     formControl.valueChanges.subscribe((val) => {
//     //         this.execRule(formControlKey, formGroup, ruleConfig, controlsConfig, componentName);
//     //     })
//     // }
//     /**
//      * multi component init will make the loading sequence wrong
//      * @param formGroup 
//      * @param ruleConfig 
//      * @param controlsConfig 
//      */
//     public async execRuleWhenInit(formGroup, ruleConfig, controlsConfig, componentName) {//because engine is single, so the rule nend to exec sync
//         for (let formControlKey of Object.keys(controlsConfig)) {
//             if (formGroup.get(formControlKey) instanceof FormGroup) {
//                 this.execRuleWhenInit(formGroup.get(formControlKey), ruleConfig, controlsConfig[formControlKey], componentName)
//             }
//             await this.execRuleCondition(formControlKey, formGroup, ruleConfig, controlsConfig, componentName)
//         }
//     }
//     public initFormValueChangeListener(formGroup: FormGroup, ruleConfig, controlsConfig, componentName) {
//         this.iterateFormGroup(formGroup, ruleConfig, controlsConfig, componentName)
//         // Object.keys(formGroup.controls).forEach(formControlKey => {
//         //     const abstractControl: AbstractControl = formGroup.get(formControlKey);
//         //     if (abstractControl instanceof FormArray) {
//         //         const formArray = (abstractControl as FormArray);
//         //         const subject = new Subject()
//         //         this.formArrayNameMap.set(formControlKey, subject);
//         //         Object.keys(formArray.controls).forEach(formControlKeyIndex => {
//         //             const formGroupSub: FormGroup = formArray.at(Number(formControlKeyIndex)) as FormGroup;
//         //             if (formGroupSub instanceof FormGroup) {
//         //                 Object.keys(formGroupSub.controls).forEach(formControlKeySub => {
//         //                     const abstractControlSub: AbstractControl = formGroupSub.get(formControlKeySub);
//         //                     abstractControlSub.valueChanges.pipe(takeUntil(subject)).subscribe((prev) => {
//         //                         // console.log(formControlKey);
//         //                         // console.log(formArrayControlKey);
//         //                         // console.log(formControlKeyIndex);
//         //                         // console.log(prev);
//         //                         // console.log(curr);
//         //                         // tslint:disable-next-line: max-line-length
//         //                         this.initRule(formControlKeySub, (formGroup.get(formControlKey) as FormArray).at(Number(formControlKeyIndex)) as FormGroup, ruleConfig);
//         //                     })
//         //                 })
//         //             }
//         //         })
//         //     } else if (abstractControl instanceof FormControl) {
//         //         const formControl = (abstractControl as FormControl);
//         //         formControl.valueChanges.subscribe(([prev, curr]) => {
//         //             // console.log(formArrayControlKey);
//         //             // console.log(prev);
//         //             // console.log(curr);
//         //             this.initRule(formControlKey, formGroup, ruleConfig);
//         //         })
//         //     }
//         // })
//     }
//     crossComponentListenerMap = {}
//     formValueCache = {}
//     public listenValueChangeFromOtherComponent(sourceComponentName, sourceFormControlName): Subject<any> {
//         const subject = this.crossComponentListenerMap[`${sourceComponentName}${sourceFormControlName}`];
//         if (subject) {
//             return subject;
//         }
//         const valueChangeSubject = new Subject<any>();
//         this.crossComponentListenerMap[`${sourceComponentName}${sourceFormControlName}`] = valueChangeSubject;
//         return valueChangeSubject;
//     }

//     public triggerValueChangeToOtherComponent(sourceComponentName: string, sourceFormControlName: string, formControlValue: string) {
//         const subject = this.crossComponentListenerMap[`${sourceComponentName}${sourceFormControlName}`];
//         if (subject) {
//             subject.next(formControlValue);
//         }
//     }
//     /**
//      * change the value in current component
//      * @param sourceComponentName 
//      * @param sourceFormControlName 
//      * @param formgroup 
//      */
//     public listenValueChangeFromOtherComponentForRuleConfigMode(sourceComponentName, sourceFormControlName, formgroup) {
//         let subject = this.crossComponentListenerMap[`${sourceComponentName}${sourceFormControlName}`];
//         if (!subject) {
//             subject = new Subject<any>();
//             this.crossComponentListenerMap[`${sourceComponentName}${sourceFormControlName}`] = subject;
//         }
//         subject.subscribe(val => {
//             let { targetFormControlName, targetFormControlValue } = val;
//             formgroup.get(targetFormControlName).patchValue(targetFormControlValue);
//         })
//     }
//     private triggerValueChangeToOtherComponentForRuleConfigMode(generalParam: GeneralParamType) {
//         const subject = this.crossComponentListenerMap[`${generalParam.sourceComponentName}${generalParam.sourceFormControlName}`];
//         if (subject) {
//             subject.next({ targetFormControlName: generalParam.targetFormControlName, targetFormControlValue: generalParam.targetFormControlValue });
//         }
//     }
// }