package item

import (
    ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9 "github.com/microsoft/kiota/abstractions/go"
    i04eb5309aeaafadd28374d79c8471df9b267510b4dc2e3144c378c50f6fd7b55 "github.com/microsoft/kiota/abstractions/go/serialization"
    ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5 "github.com/microsoft/kiota-samples/msgraph-mail/go/utilities/models"
)

type AttachmentRequestBuilder struct {
    currentPath string;
    httpCore ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.HttpCore;
    isRawUrl bool;
    pathSegment string;
}
type AttachmentRequestBuilderGetQueryParameters struct {
    ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.QueryParametersBase
    Expand []string;
    Select []string;
}
func NewAttachmentRequestBuilder(currentPath string, httpCore ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.HttpCore, isRawUrl bool)(*AttachmentRequestBuilder) {
    m := &AttachmentRequestBuilder{
    }
    m.pathSegment = "";
    m.httpCore = httpCore;
    m.currentPath = currentPath;
    m.isRawUrl = isRawUrl;
    return m
}
func (m *AttachmentRequestBuilder) CreateDeleteRequestInformation(h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption)(*ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.RequestInformation, error) {
    requestInfo := ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.NewRequestInformation()
    err := requestInfo.SetUri(m.currentPath, m.pathSegment, m.isRawUrl)
    requestInfo.Method = ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.DELETE
    if err != nil {
        return nil, err
    }
    if h != nil {
        err = h(requestInfo.Headers)
        if err != nil {
            return nil, err
        }
    }
    if o != nil {
        err = requestInfo.AddMiddlewareOptions(o)
        if err != nil {
            return nil, err
        }
    }
    return requestInfo, err
}
func (m *AttachmentRequestBuilder) CreateGetRequestInformation(q func (value *AttachmentRequestBuilderGetQueryParameters) (err error), h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption)(*ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.RequestInformation, error) {
    requestInfo := ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.NewRequestInformation()
    err := requestInfo.SetUri(m.currentPath, m.pathSegment, m.isRawUrl)
    requestInfo.Method = ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.GET
    if err != nil {
        return nil, err
    }
    if q != nil {
        qParams := new(AttachmentRequestBuilderGetQueryParameters)
        err = q(qParams)
        if err != nil {
            return nil, err
        }
        err := qParams.AddQueryParameters(requestInfo.QueryParameters)
        if err != nil {
            return nil, err
        }
    }
    if h != nil {
        err = h(requestInfo.Headers)
        if err != nil {
            return nil, err
        }
    }
    if o != nil {
        err = requestInfo.AddMiddlewareOptions(o)
        if err != nil {
            return nil, err
        }
    }
    return requestInfo, err
}
func (m *AttachmentRequestBuilder) CreatePatchRequestInformation(body *ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment, h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption)(*ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.RequestInformation, error) {
    requestInfo := ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.NewRequestInformation()
    err := requestInfo.SetUri(m.currentPath, m.pathSegment, m.isRawUrl)
    requestInfo.Method = ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.PATCH
    if err != nil {
        return nil, err
    }
    requestInfo.SetContentFromParsable(m.httpCore, "application/json", body)
    if h != nil {
        err = h(requestInfo.Headers)
        if err != nil {
            return nil, err
        }
    }
    if o != nil {
        err = requestInfo.AddMiddlewareOptions(o)
        if err != nil {
            return nil, err
        }
    }
    return requestInfo, err
}
func (m *AttachmentRequestBuilder) Delete(h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption, responseHandler *ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.ResponseHandler)(func() (error)) {
    requestInfo, err := m.CreateDeleteRequestInformation(h, o);
    if err != nil {
        return func() (error) { return err }
    }
    return func() (error) {
        err := m.httpCore.SendNoContentAsync(*requestInfo, *responseHandler)()
        if err != nil {
            return err
        }
        return nil
    }
}
func (m *AttachmentRequestBuilder) Get(q func (value *AttachmentRequestBuilderGetQueryParameters) (err error), h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption, responseHandler *ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.ResponseHandler)(func() (*ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment, error)) {
    requestInfo, err := m.CreateGetRequestInformation(q, h, o);
    if err != nil {
        return func() (*ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment, error) { return nil, err }
    }
    return func() (*ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment, error) {
        res, err := m.httpCore.SendAsync(*requestInfo, func () i04eb5309aeaafadd28374d79c8471df9b267510b4dc2e3144c378c50f6fd7b55.Parsable { return new(ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment) }, *responseHandler)()
        if err != nil {
            return nil, err
        }
        return res.(*ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment), nil
    }
}
func (m *AttachmentRequestBuilder) Patch(body *ieea96ea0706c7e10d110f01563f903230c17531f1ba4f5e7095035777bc8b5e5.Attachment, h func (value map[string]string) (err error), o []ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.MiddlewareOption, responseHandler *ida96af0f171bb75f894a4013a6b3146a4397c58f11adb81a2b7cbea9314783a9.ResponseHandler)(func() (error)) {
    requestInfo, err := m.CreatePatchRequestInformation(body, h, o);
    if err != nil {
        return func() (error) { return err }
    }
    return func() (error) {
        err := m.httpCore.SendNoContentAsync(*requestInfo, *responseHandler)()
        if err != nil {
            return err
        }
        return nil
    }
}
