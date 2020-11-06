/* tslint:disable */
/* eslint-disable */
/*
 * Autogenerated by @creditkarma/thrift-typescript v3.7.6
 * DO NOT EDIT UNLESS YOU ARE SURE THAT YOU KNOW WHAT YOU ARE DOING
*/
import * as thrift from "@creditkarma/thrift-server-core";
import * as Icon from "./Icon";
export interface IBanner {
    icon?: Icon.Icon;
    title?: string;
    subtitle?: string;
    ctaCopy?: string;
    ctaUrl?: string;
}
export interface IBannerArgs {
    icon?: Icon.Icon;
    title?: string;
    subtitle?: string;
    ctaCopy?: string;
    ctaUrl?: string;
}
export const BannerCodec: thrift.IStructCodec<IBannerArgs, IBanner> = {
    encode(args: IBannerArgs, output: thrift.TProtocol): void {
        const obj: any = {
            icon: args.icon,
            title: args.title,
            subtitle: args.subtitle,
            ctaCopy: args.ctaCopy,
            ctaUrl: args.ctaUrl
        };
        output.writeStructBegin("Banner");
        if (obj.icon != null) {
            output.writeFieldBegin("icon", thrift.TType.I32, 1);
            output.writeI32(obj.icon);
            output.writeFieldEnd();
        }
        if (obj.title != null) {
            output.writeFieldBegin("title", thrift.TType.STRING, 2);
            output.writeString(obj.title);
            output.writeFieldEnd();
        }
        if (obj.subtitle != null) {
            output.writeFieldBegin("subtitle", thrift.TType.STRING, 3);
            output.writeString(obj.subtitle);
            output.writeFieldEnd();
        }
        if (obj.ctaCopy != null) {
            output.writeFieldBegin("ctaCopy", thrift.TType.STRING, 4);
            output.writeString(obj.ctaCopy);
            output.writeFieldEnd();
        }
        if (obj.ctaUrl != null) {
            output.writeFieldBegin("ctaUrl", thrift.TType.STRING, 5);
            output.writeString(obj.ctaUrl);
            output.writeFieldEnd();
        }
        output.writeFieldStop();
        output.writeStructEnd();
        return;
    },
    decode(input: thrift.TProtocol): IBanner {
        let _args: any = {};
        input.readStructBegin();
        while (true) {
            const ret: thrift.IThriftField = input.readFieldBegin();
            const fieldType: thrift.TType = ret.fieldType;
            const fieldId: number = ret.fieldId;
            if (fieldType === thrift.TType.STOP) {
                break;
            }
            switch (fieldId) {
                case 1:
                    if (fieldType === thrift.TType.I32) {
                        const value_1: Icon.Icon = input.readI32();
                        _args.icon = value_1;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 2:
                    if (fieldType === thrift.TType.STRING) {
                        const value_2: string = input.readString();
                        _args.title = value_2;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 3:
                    if (fieldType === thrift.TType.STRING) {
                        const value_3: string = input.readString();
                        _args.subtitle = value_3;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 4:
                    if (fieldType === thrift.TType.STRING) {
                        const value_4: string = input.readString();
                        _args.ctaCopy = value_4;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                case 5:
                    if (fieldType === thrift.TType.STRING) {
                        const value_5: string = input.readString();
                        _args.ctaUrl = value_5;
                    }
                    else {
                        input.skip(fieldType);
                    }
                    break;
                default: {
                    input.skip(fieldType);
                }
            }
            input.readFieldEnd();
        }
        input.readStructEnd();
        return {
            icon: _args.icon,
            title: _args.title,
            subtitle: _args.subtitle,
            ctaCopy: _args.ctaCopy,
            ctaUrl: _args.ctaUrl
        };
    }
};
export class Banner extends thrift.StructLike implements IBanner {
    public icon?: Icon.Icon;
    public title?: string;
    public subtitle?: string;
    public ctaCopy?: string;
    public ctaUrl?: string;
    public readonly _annotations: thrift.IThriftAnnotations = {};
    public readonly _fieldAnnotations: thrift.IFieldAnnotations = {};
    constructor(args: IBannerArgs = {}) {
        super();
        if (args.icon != null) {
            const value_6: Icon.Icon = args.icon;
            this.icon = value_6;
        }
        if (args.title != null) {
            const value_7: string = args.title;
            this.title = value_7;
        }
        if (args.subtitle != null) {
            const value_8: string = args.subtitle;
            this.subtitle = value_8;
        }
        if (args.ctaCopy != null) {
            const value_9: string = args.ctaCopy;
            this.ctaCopy = value_9;
        }
        if (args.ctaUrl != null) {
            const value_10: string = args.ctaUrl;
            this.ctaUrl = value_10;
        }
    }
    public static read(input: thrift.TProtocol): Banner {
        return new Banner(BannerCodec.decode(input));
    }
    public static write(args: IBannerArgs, output: thrift.TProtocol): void {
        return BannerCodec.encode(args, output);
    }
    public write(output: thrift.TProtocol): void {
        return BannerCodec.encode(this, output);
    }
}